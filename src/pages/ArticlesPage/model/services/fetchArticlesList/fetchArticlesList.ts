import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
  getArticlesPageLimit,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPagePageNum,
  getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

interface FetchArticlesArgs {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesArgs,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (args, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const page = getArticlesPagePageNum(getState());
  const limit = getArticlesPageLimit(getState());
  const order = getArticlesPageOrder(getState());
  const sort = getArticlesPageSort(getState());
  const search = getArticlesPageSearch(getState());
  const type = getArticlesPageType(getState());

  try {
    addQueryParams({
      sort, order, search, type,
    });

    const response = await extra.api.get<Article[]>('articles', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order,
        q: search,
        type: type === ArticleType.ALL ? undefined : type,
      },
    });

    if (!response.data) {
      throw new Error('No data');
    }

    return response.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
