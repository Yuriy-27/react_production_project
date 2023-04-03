import { EntityState } from '@reduxjs/toolkit';
import {
  Article, ArticleView, ArticleSortField, ArticleType,
} from 'entities/Article';
import { SortOrder } from 'shared/lib/types/sortOrder';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  viewMode: ArticleView;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType

  _init?: boolean;
}
