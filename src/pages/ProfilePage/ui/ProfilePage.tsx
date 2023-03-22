import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { FC, memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface IProfilePageProps {
  className?: string | undefined;
}

const ProfilePage: FC<IProfilePageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeReducerAfterUnmount>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
