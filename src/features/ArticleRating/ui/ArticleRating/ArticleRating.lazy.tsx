import { Suspense, lazy } from 'react';
import { IArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

const ArticleRatingAsync = lazy(
  () => import('./ArticleRating'),
);

export const ArticleRatingLazy = (props: IArticleRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={120} />}>
      <ArticleRatingAsync {...props} />
    </Suspense>
  );
};
