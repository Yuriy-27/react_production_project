import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLInkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export function Navbar({ className }: INavbarProps) {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onToggleAuthModal = useCallback(
    () => {
      setIsAuthModalOpen((prev) => !prev);
    },
    [],
  );

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          theme={ButtonTheme.CLEAR}
          className={cls.link}
          onClick={onToggleAuthModal}
        >
          {t('login_button')}
        </Button>
        <Modal isOpen={isAuthModalOpen} onClose={onToggleAuthModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, veritatis?
        </Modal>
      </div>
    </div>
  );
}
