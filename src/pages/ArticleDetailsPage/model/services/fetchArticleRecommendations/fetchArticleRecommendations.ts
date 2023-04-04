import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, getArticleDetailsData } from 'entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
  'articleDetailsRecommendations/fetchArticleRecommendations',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const article = getArticleDetailsData(getState());

    try {
      const response = await extra.api.get<Article[]>('articles', {
        params: {
          _limit: 4,
          type: article?.type ? article.type[0] : undefined,
        },
      });

      if (!response.data) {
        throw new Error('No data');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
