import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import cls from './ProfileCard.module.scss';

interface IProfileCardProps {
  className?: string;
}

export const ProfileCard = memo((props: IProfileCardProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileLoading);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('profile-page')} />
        <Button
          theme={ButtonTheme.OUTLINED}
          className={cls.editButton}
        >
          {t('edit-profile')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.firstName}
          placeholder={t('first_name')}
          className={cls.input}
        />
        <Input
          value={data?.lastName}
          placeholder={t('last_name')}
          className={cls.input}
        />
      </div>
    </div>
  );
});
