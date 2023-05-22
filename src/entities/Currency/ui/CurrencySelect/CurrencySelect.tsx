import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui/Select/Select';
import { ListBox } from '@/shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface ICurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

const options = [
  { value: Currency.EUR, label: Currency.EUR },
  { value: Currency.USD, label: Currency.USD },
  { value: Currency.GBP, label: Currency.GBP },
  { value: Currency.UAH, label: Currency.UAH },
];

export const CurrencySelect = memo((props: ICurrencySelectProps) => {
  const {
    value, onChange, readOnly, className,
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [],
  );

  return (
    <ListBox
      className={className}
      value={value}
      defaultValue={t('choose_currency')}
      onChange={onChangeHandler}
      items={options}
      readonly={readOnly}
      label={t('choose_currency')}
    />
  );
});
