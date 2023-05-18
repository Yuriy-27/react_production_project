import { ReactNode, memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';

interface IDrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer = memo((props: IDrawerProps) => {
  const {
    className, children, isOpen, onClose, lazy,
  } = props;

  const {
    close, isClosing, isMounted,
  } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,

  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className])}>
        <div className={cls.overlay} onClick={close} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
