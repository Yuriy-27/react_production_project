import { ArticleList } from 'entities/Article';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { getArticlesPageIsLoading, getArticlesPageViewMode } from '../../model/selectors/articlesPageSelectors';

interface IArticlesInfiniteListProps {
  className?: string;
}

export const ArticlesInfiniteList = memo((props: IArticlesInfiniteListProps) => {
  const { className } = props;
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const viewMode = useSelector(getArticlesPageViewMode);

  return (
    <ArticleList
      className={classNames('', {}, [className])}
      isLoading={isLoading}
      viewMode={viewMode}
      articles={articles}
    />
  );
});
