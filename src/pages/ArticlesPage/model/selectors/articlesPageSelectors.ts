import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView, ArticleSortField, ArticleType } from 'entities/Article';
import { ARTICLES_VIEW_MODE_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageViewMode = (state: StateSchema) => state.articlesPage?.viewMode
  || localStorage.getItem(ARTICLES_VIEW_MODE_LOCAL_STORAGE_KEY) as ArticleView
  || ArticleView.GRID;
export const getArticlesPagePageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageIsInit = (state: StateSchema) => state.articlesPage?._init || false;
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortField.VIEWS;
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
export const getArticlesPageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL;
