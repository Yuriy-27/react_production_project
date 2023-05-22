import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface ISkeletonProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  border?: string;
}

export const Skeleton = memo((props: ISkeletonProps) => {
  const {
    className, width, height, border,
  } = props;
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      className={classNames(cls.Skeleton, {}, [className])}
      style={styles}
    />
  );
});
