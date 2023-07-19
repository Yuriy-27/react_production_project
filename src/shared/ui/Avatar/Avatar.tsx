import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage/AppImage';
import DefaultAvatar from '@/shared/assets/icons/avatar_default_40_40.svg';
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Skeleton/Skeleton';

interface IAvatarProps {
  className?: string;
  src?: string;
  size?: number;
}

export const Avatar = memo((props: IAvatarProps) => {
  const { className, src, size = 100 } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  const fallback = <Skeleton width={size} height={size} border="50%" />;
  const errorFallback = <Icon Svg={DefaultAvatar} width={size} height={size} />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      alt="avatar"
      src={src}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
});
