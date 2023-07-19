import { memo, SVGProps, FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export enum IconTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
  theme?: IconTheme;
}

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    theme = IconTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Svg
      className={classNames(cls.Icon, {}, [className, cls[theme]])}
      {...otherProps}
    />
  );
});
