import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme
  align?: TextAlign;
}

export const Text = memo((props: ITextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
      {title && <h1 className={cls.title}>{title}</h1>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
