import { Article, ArticleType } from 'entities/Article';
import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Article[], {limit: number, type: ArticleType[] | undefined}>({
      query: ({ limit, type }) => ({
        url: 'articles',
        params: {
          _limit: limit,
          type: type ? type[0] : undefined,
        },
      }),
    }),
  }),
});

export const { useGetArticleRecommendationsListQuery } = recommendationsApi;
