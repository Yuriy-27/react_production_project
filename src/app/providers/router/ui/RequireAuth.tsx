import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserRoles } from '@/entities/User/model/selectors/getUserRole/getUserRole';
import { UserRole, getUserAuthData } from '@/entities/User';
import { RoutePaths } from '@/shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
 }

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requireRole) => {
      const hasRole = userRoles?.includes(requireRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!auth) {
    return (
      <Navigate
        to={RoutePaths.main}
        state={{ from: location }}
        replace
      />
    );
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate
        to={RoutePaths.forbidden}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}
