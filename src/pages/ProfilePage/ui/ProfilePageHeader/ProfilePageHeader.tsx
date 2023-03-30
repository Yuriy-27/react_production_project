import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getProfileData, getProfileReadOnly, profileActions, updateProfileData,
} from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface IProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = memo((props: IProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const readOnly = useSelector(getProfileReadOnly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const catEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(
    () => {
      dispatch(profileActions.setReadOnly(false));
    },
    [dispatch],
  );

  const onCancelEdit = useCallback(
    () => {
      dispatch(profileActions.cancelEdit());
    },
    [dispatch],
  );

  const onSave = useCallback(
    () => {
      dispatch(updateProfileData());
    },
    [dispatch],
  );

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('profile-page')} />
      {catEdit && (
        <div className={cls.buttonsWrapper}>
          {readOnly ? (
            <Button
              theme={ButtonTheme.OUTLINED}
              className={cls.editButton}
              onClick={onEdit}
            >
              {t('edit-profile')}
            </Button>
          ) : (
            <>
              <Button
                theme={ButtonTheme.OUTLINED}
                className={cls.saveButton}
                onClick={onSave}
              >
                {t('save_edit')}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINED_RED}
                onClick={onCancelEdit}
              >
                {t('cancel_edit')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
});
