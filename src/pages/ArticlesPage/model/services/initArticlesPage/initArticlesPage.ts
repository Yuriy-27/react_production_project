import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/lib/types/sortOrder';
import {
  getArticlesPageIsInit,
} from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkApi) => {
  const { dispatch, getState } = thunkApi;
  const isInit = getArticlesPageIsInit(getState());

  if (!isInit) {
    const search = searchParams.get('search') ?? '';
    const sort = searchParams.get('sort') as ArticleSortField;
    const order = searchParams.get('order') as SortOrder;
    const type = searchParams.get('type') as ArticleType;

    if (search) {
      dispatch(articlesPageActions.setSearch(search));
    }

    if (sort) {
      dispatch(articlesPageActions.setSort(sort));
    }

    if (order) {
      dispatch(articlesPageActions.setOrder(order));
    }

    if (type) {
      dispatch(articlesPageActions.setType(type));
    }

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({}));
  }
});
