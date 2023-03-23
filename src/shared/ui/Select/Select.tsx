import { ChangeEvent, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions {
  value: string;
  label: string;
}

interface ISelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const Select = memo((props: ISelectProps) => {
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
    onChange?.(event.target.value);
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
});
