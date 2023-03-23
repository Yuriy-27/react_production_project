import { getUserAuthData } from 'entities/User';
import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

function AppRouter() {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(RouteConfig).filter(({ authOnly }) => {
    if (authOnly && !isAuth) {
      return false;
    }

    return true;
  }), [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {
          routes.map(({ element, path }) => (
            <Route
              key={path}
              path={path}
              element={(
                <div className="content-wrapper">
                  {element}
                </div>
              )}
            />
          ))
        }
      </Routes>
    </Suspense>
  );
}

export default memo(AppRouter);
