import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme
}

export const Text: FC<ITextProps> = (props) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
  } = props;

  return (
    <div className={classNames(cls.ComponentName, { [cls[theme]]: true }, [className])}>
      {title && <h1 className={cls.title}>{title}</h1>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
