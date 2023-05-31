import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from '@/app/providers/router';
import { getUserInit, userActions } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const userInit = useSelector(getUserInit);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  if (!userInit) {
    return null;
  }

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="page-content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
