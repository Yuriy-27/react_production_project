import { FC, ReactNode, MouseEvent } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';

interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: FC<IModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
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

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={close}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
