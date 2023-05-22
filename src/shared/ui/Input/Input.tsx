import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  label?: string;
  readOnly?: boolean;
}

export const Input = memo((props: IInputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    autofocus,
    label,
    readOnly,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const mods: Mods = {
    [cls.readOnly]: readOnly,
  };

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {label && <span className={cls.Label}>{label}</span>}
      <input
        ref={inputRef}
        className={cls.Input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        readOnly={readOnly}
        {...otherProps}
      />
    </div>
  );
});
