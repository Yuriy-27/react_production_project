import {
  memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps, RouteConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

function AppRouter() {
  const renderWithWrapper = useCallback(
    (route: AppRoutesProps) => {
      const element = (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {route.element}
        </>
      );

      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element
          }
        />
      );
    },
    [],
  );

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(RouteConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
}

export default memo(AppRouter);
