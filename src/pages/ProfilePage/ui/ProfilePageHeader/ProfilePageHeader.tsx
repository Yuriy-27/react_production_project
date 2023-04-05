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
import { HStack } from 'shared/ui/Stack/HStack/HStack';

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
    <HStack maxWidth justify="between" className={classNames('', {}, [className])}>
      <Text title={t('profile-page')} />
      {catEdit && (
        <>
          {readOnly ? (
            <Button
              theme={ButtonTheme.OUTLINED}
              onClick={onEdit}
            >
              {t('edit-profile')}
            </Button>
          ) : (
            <HStack gap="8" justify="end">
              <Button
                theme={ButtonTheme.OUTLINED}
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
            </HStack>
          )}
        </>
      )}
    </HStack>
  );
});
