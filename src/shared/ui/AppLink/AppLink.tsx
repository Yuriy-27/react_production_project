import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLInkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLInkTheme
}

export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
  const {
    to,
    className,
    children,
    theme = AppLInkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      ref={ref}
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
