import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
  Article, ArticleView, ArticleSortField, ArticleType,
} from '@/entities/Article';
import { ARTICLES_VIEW_MODE_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { SortOrder } from '@/shared/lib/types/sortOrder';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    ids: [],
    entities: {},
    viewMode: ArticleView.GRID,
    page: 1,
    hasMore: true,
    _init: false,
    limit: 12,
    search: '',
    sort: ArticleSortField.VIEWS,
    order: 'asc',
    type: ArticleType.ALL,
  }),
  reducers: {
    setViewMode(state, action: PayloadAction<ArticleView>) {
      state.viewMode = action.payload;
      localStorage.setItem(
        ARTICLES_VIEW_MODE_LOCAL_STORAGE_KEY,
        action.payload,
      );
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setOrder(state, action: PayloadAction<SortOrder>) {
      state.order = action.payload;
    },
    setSort(state, action: PayloadAction<ArticleSortField>) {
      state.sort = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setType(state, action: PayloadAction<ArticleType>) {
      state.type = action.payload;
    },
    initState(state) {
      const view = localStorage.getItem(
        ARTICLES_VIEW_MODE_LOCAL_STORAGE_KEY,
      ) as ArticleView;
      state.viewMode = view;
      state.limit = view === ArticleView.GRID ? 12 : 4;
      state._init = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
