import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';

interface IProfilePageProps {
  className?: string;
}

const ProfilePage: FC<IProfilePageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');

  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      {t('profile-page')}
    </div>
  );
};

export default memo(ProfilePage);
