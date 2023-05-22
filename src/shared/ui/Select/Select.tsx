import { ChangeEvent, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
  value: T;
  label: string;
}

interface ISelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOptions<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readOnly?: boolean;
}

export const Select = <T extends string>(props: ISelectProps<T>) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readOnly,
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T);
  };

  const optionsList = useMemo(() => options?.map((item) => (
    <option className={cls.SelectOption} key={item.value} value={item.value}>{item.label}</option>
  )), [options]);

  return (
    <div className={classNames(cls.SelectWrapper, {}, [className])}>
      {label && <span className={cls.Label}>{label}</span>}
      <select
        disabled={readOnly}
        className={cls.SelectElement}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
};
