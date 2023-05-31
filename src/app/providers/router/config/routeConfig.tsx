import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { AppRoutes, RoutePaths } from '@/shared/constants/router';
import { AppRoutesProps } from '@/shared/types/router';

export const RouteConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePaths.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePaths.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePaths.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: RoutePaths.article_edit,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: RoutePaths.article_create,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: RoutePaths.admin_panel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [AppRoutes.FORBIDDEN]: {
    path: RoutePaths.forbidden,
    element: <ForbiddenPage />,
  },

  // last route
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
};
