import { profileReducer } from 'entities/Profile';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface IProfilePageProps {
  className?: string;
}

const ProfilePage: FC<IProfilePageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader reducers={reducers} removeReducerAfterUnmount>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        {t('profile-page')}
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
