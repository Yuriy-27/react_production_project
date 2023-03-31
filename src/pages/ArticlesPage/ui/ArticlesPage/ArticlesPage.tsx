import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
  getArticlesListError, getArticlesListIsLoading, getArticlesListViewMode,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesListIsLoading);
  const viewMode = useSelector(getArticlesListViewMode);
  const error = useSelector(getArticlesListError);

  const onChangeViewMode = useCallback((viewMode: ArticleView) => {
    dispatch(articlesPageActions.setViewMode(viewMode));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector
          viewMode={viewMode}
          onViewModeChange={onChangeViewMode}
        />
        <ArticleList
          isLoading={isLoading}
          viewMode={viewMode}
          articles={articles}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
