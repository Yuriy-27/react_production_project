import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { HStack, VStack } from 'shared/ui/Stack';
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
      <HStack justify="center" className={classNames(cls.ProfileCard, {}, [className])}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack justify="center" className={classNames(cls.ProfileCard, {}, [className])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('error_title')}
          text={t('error_text')}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  return (
    <VStack gap="16" maxWidth className={classNames(cls.ProfileCard, {}, [className])}>
      {data?.avatar && (
        <HStack maxWidth justify="center" className={cls.avatarWrapper}>
          <Avatar src={data.avatar} size={150} />
        </HStack>
      )}
      <Input
        value={data?.firstName}
        placeholder={t('first_name')}
        className={cls.input}
        onChange={onChangeFirstName}
        readOnly={readOnly}
        data-testid="ProfileCard__firstName"
      />
      <Input
        value={data?.lastName}
        placeholder={t('last_name')}
        className={cls.input}
        onChange={onChangeLastName}
        readOnly={readOnly}
        data-testid="ProfileCard__lastName"
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
        className={cls.select}
        onChange={onChangeCurrency}
        readOnly={readOnly}
      />
      <CountrySelect
        value={data?.country}
        className={cls.select}
        onChange={onChangeCountry}
        readOnly={readOnly}
      />
    </VStack>
  );
});
