import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export function Navbar({ className }: INavbarProps) {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onCloseAuthModal = useCallback(
    () => {
      setIsAuthModalOpen(false);
    },
    [],
  );

  const onShowAuthModal = useCallback(
    () => {
      setIsAuthModalOpen(true);
    },
    [],
  );

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          theme={ButtonTheme.CLEAR}
          className={cls.link}
          onClick={onShowAuthModal}
        >
          {t('login_button')}
        </Button>
        <LoginModal isOpen={isAuthModalOpen} onClose={onCloseAuthModal} />
      </div>
    </div>
  );
}
