import { memo, SVGProps, VFC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export enum IconTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: VFC<SVGProps<SVGSVGElement>>;
  theme?: IconTheme;
}

export const Icon = memo((props: IIconProps) => {
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
