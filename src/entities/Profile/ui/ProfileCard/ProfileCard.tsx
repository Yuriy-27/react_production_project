import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { IProfile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface IProfileCardProps {
  className?: string;
  data?: IProfile;
  error?: string;
  isLoading?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency: (currency: Currency) => void;
  onChangeCountry: (country: Country) => void;
  readOnly?: boolean;
}

export const ProfileCard = memo((props: IProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
    readOnly,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('error_title')}
          text={t('error_text')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data.avatar} size={150} />
          </div>
        )}
        <Input
          value={data?.firstName}
          placeholder={t('first_name')}
          className={cls.input}
          onChange={onChangeFirstName}
          readOnly={readOnly}
        />
        <Input
          value={data?.lastName}
          placeholder={t('last_name')}
          className={cls.input}
          onChange={onChangeLastName}
          readOnly={readOnly}
        />
        <Input
          value={data?.age}
          placeholder={t('profile_age')}
          className={cls.input}
          onChange={onChangeAge}
          readOnly={readOnly}
        />
        <Input
          value={data?.userName}
          placeholder={t('profile_userName')}
          className={cls.input}
          onChange={onChangeUsername}
          readOnly={readOnly}
        />
        <Input
          value={data?.city}
          placeholder={t('profile_city')}
          className={cls.input}
          onChange={onChangeCity}
          readOnly={readOnly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('profile_avatar')}
          className={cls.input}
          onChange={onChangeAvatar}
          readOnly={readOnly}
        />
        <CurrencySelect
          value={data?.currency}
          className={cls.input}
          onChange={onChangeCurrency}
          readOnly={readOnly}
        />
        <CountrySelect
          value={data?.country}
          className={cls.input}
          onChange={onChangeCountry}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
});
