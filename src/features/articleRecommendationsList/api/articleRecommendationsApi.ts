import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query({
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
