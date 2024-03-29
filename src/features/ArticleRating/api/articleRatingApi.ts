import { rtkApi } from '@/shared/api/rtkApi';
import { IRating } from '@/entities/Rating';

interface GetArticleRatingArgs {
  userId: string;
  articleId: string;
}

interface RateArticleArgs {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<IRating[], GetArticleRatingArgs>({
      query: ({ userId, articleId }) => ({
        url: 'article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArgs>({
      query: (args) => ({
        url: 'article-ratings',
        method: 'POST',
        body: args,
      }),
    }),
  }),
});

export const { useGetArticleRatingQuery, useRateArticleMutation } = articleRatingApi;
