import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: INavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const onShowAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    dispatch(loginActions.clearLoginData());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title="Awesome App"
        />
        <AppLink
          to={RoutePaths.article_create}
          className={cls.createArticleLink}
        >
          {t('create_article_link')}
        </AppLink>
        <Dropdown
          direction="bottom left"
          className={cls.dropdown}
          trigger={<Avatar size={30} src={authData.avatar} />}
          items={[
            {
              content: t('profile_page_nav'),
              href: RoutePaths.profile + authData.id,
            },
            {
              content: t('logout_button'),
              onClick: onLogout,
            },
          ]}
        />
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          theme={ButtonTheme.CLEAR}
          className={cls.link}
          onClick={onShowAuthModal}
        >
          {t('login_button')}
        </Button>
        {isAuthModalOpen && <LoginModal isOpen={isAuthModalOpen} onClose={onCloseAuthModal} />}
      </div>
    </header>
  );
});
