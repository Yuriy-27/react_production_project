import type { ArticleDetailsPageSchema } from './model/types';
import type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
import type { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';
import { ArticleDetailsPageLazy } from './ui/ArticleDetailsPage/ArticleDetailsPage.lazy';

export {
  ArticleDetailsPageLazy as ArticleDetailsPage,
  ArticleDetailsCommentsSchema,
  ArticleDetailsRecommendationsSchema,
  ArticleDetailsPageSchema,
};
