import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy-24-24.svg';
import { Icon, IconTheme } from '@/shared/ui/Icon/Icon';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';

export enum CodeTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ICodeProps {
  className?: string;
  text: string;
  theme?: CodeTheme;
}

export const Code = memo((props: ICodeProps) => {
  const {
    className,
    text,
    theme = CodeTheme.PRIMARY,
  } = props;

  const onCopy = useCallback(
    () => {
      navigator.clipboard.writeText(text);
    },
    [text],
  );

  return (
    <pre className={classNames(cls.Code, {}, [className, cls[theme]])}>
      <Button
        onClick={onCopy}
        theme={theme === CodeTheme.SECONDARY ? ButtonTheme.CLEAR_SECONDARY : ButtonTheme.CLEAR}
        className={cls.copyBtn}
      >
        <Icon Svg={CopyIcon} theme={IconTheme.SECONDARY} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
