import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (country: Country) => void;
  readOnly?: boolean;
}

const options = [
  { value: Country.UA, label: Country.UA },
  { value: Country.UK, label: Country.UK },
  { value: Country.USA, label: Country.USA },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    value, onChange, readOnly, className,
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [],
  );

  return (
    <Select
      className={className}
      label={t('choose_country')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readOnly={readOnly}
    />
  );
});
