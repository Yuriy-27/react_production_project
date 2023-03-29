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

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: ITextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}>
      {title && <h1 className={cls.title}>{title}</h1>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
