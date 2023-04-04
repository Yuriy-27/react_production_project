import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface IArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  viewMode?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (viewMode: ArticleView) => new Array(viewMode === ArticleView.GRID ? 12 : 3)
  .fill(0)
  .map((_, index) => (
    <ArticleListItemSkeleton
      key={index}
      viewMode={viewMode}
      className={cls.card}
    />
  ));

export const ArticleList = memo((props: IArticleListProps) => {
  const {
    className,
    articles,
    isLoading = true,
    viewMode = ArticleView.GRID,
    target,
  } = props;
  const { t } = useTranslation('article');

  const renderArticles = (article: Article) => (
    <ArticleListItem
      key={article.id}
      article={article}
      viewMode={viewMode}
      className={cls.card}
      target={target}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[viewMode]])}>
        <Text
          className={cls.noArticles}
          title={t('no_articles')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[viewMode]])}>
      {articles.length > 0
        ? articles.map(renderArticles)
        : null}
      {isLoading && getSkeletons(viewMode)}
    </div>
  );
});
