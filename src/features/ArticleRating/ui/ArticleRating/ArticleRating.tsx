import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useGetArticleRatingQuery, useRateArticleMutation } from '../../api/articleRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface IArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: IArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation('article');
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useGetArticleRatingQuery({ articleId, userId: userData?.id ?? '' });
  const [rateArticleMutation] = useRateArticleMutation();

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        articleId,
        userId: userData?.id ?? '',
        rate: starsCount,
        feedback,
      });
    } catch (error) {
      // handle error
      console.log('handleRateArticle Error', error);
    }
  }, [articleId, rateArticleMutation, userData?.id]);

  const cancelHandler = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle]);

  const acceptHandler = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  }, [handleRateArticle]);

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={acceptHandler}
      onCancel={cancelHandler}
      rate={rating?.rate}
      className={className}
      title={rating?.rate ? t('rate_thanks') : t('rate_article')}
      feedbackTitle={t('rate_article_feedback')}
      hasFeedback
    />
  );
});

export default ArticleRating;
