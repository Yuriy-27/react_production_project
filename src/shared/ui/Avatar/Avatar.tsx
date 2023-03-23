import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface IAvatarProps {
  className?: string;
  src?: string;
  size?: number;
}

export const Avatar = memo((props: IAvatarProps) => {
  const { className, src, size } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      alt="avatar"
      src={src}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
});
