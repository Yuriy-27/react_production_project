import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAuthData,
  isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import cls from './AvatarDropdown.module.scss';

interface IAvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: IAvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    dispatch(loginActions.clearLoginData());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames(cls.AvatarDropdown, {}, [className])}
      trigger={(
        <Avatar
          size={30}
          src={authData.avatar}
          className={cls.avatar}
        />
      )}
      items={[
        ...(isAdminPanelAvailable ? [{
          content: t('admin_page_nav'),
          href: RoutePaths.admin_panel,
        }] : []),
        {
          content: t('profile_page_nav'),
          href: RoutePaths.profile + authData.id,
        },
        {
          content: t('create_article_link'),
          href: RoutePaths.article_create,
        },
        {
          content: t('logout_button'),
          onClick: onLogout,
        },
      ]}
    />
  );
});
