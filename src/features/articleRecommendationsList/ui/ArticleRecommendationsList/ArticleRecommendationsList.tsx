import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Article, ArticleList, getArticleDetailsData } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useGetArticleRecommendationsListQuery } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const article = useSelector(getArticleDetailsData);
  const { data: recommendations, isLoading, error } = useGetArticleRecommendationsListQuery({
    limit: 4,
    type: article?.type,
  });

  const filteredRecommendations = useMemo(() => {
    return recommendations?.filter((recommendation: Article) => recommendation.id !== article?.id);
  }, [article?.id, recommendations]);

  if (error || !recommendations || filteredRecommendations?.length === 0) {
    return null;
  }

  return (
    <VStack gap="8" className={classNames('', {}, [className])}>
      <Text title={t('recommendations')} />
      <ArticleList
        isLoading={isLoading}
        articles={filteredRecommendations || recommendations}
        target="_blank"
      />
    </VStack>
  );
});
