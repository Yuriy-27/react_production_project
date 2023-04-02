import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface IArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  viewMode?: ArticleView;
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
  } = props;
  const { t } = useTranslation();

  const renderArticles = (article: Article) => (
    <ArticleListItem
      key={article.id}
      article={article}
      viewMode={viewMode}
      className={cls.card}
    />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[viewMode]])}>
      {articles.length > 0
        ? articles.map(renderArticles)
        : null}
      {isLoading && getSkeletons(viewMode)}
    </div>
  );
});