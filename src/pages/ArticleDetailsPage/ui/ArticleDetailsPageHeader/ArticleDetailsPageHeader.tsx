import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/constants/router';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
      navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      if (article) {
        navigate(getRouteArticleEdit(article.id));
      }
    }, [article, navigate]);

    return (
      <HStack
        maxWidth
        justify="between"
        className={classNames('', {}, [className])}
      >
        <Button theme={ButtonTheme.OUTLINED} onClick={onBackToList}>
          {t('back_to_list')}
        </Button>
        {canEdit && (
          <Button theme={ButtonTheme.OUTLINED} onClick={onEditArticle}>
            {t('edit_article')}
          </Button>
        )}
      </HStack>
    );
  },
);
