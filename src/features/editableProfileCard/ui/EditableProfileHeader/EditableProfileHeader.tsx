import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface IProfilePageHeaderProps {
  className?: string;
}

export const EditableProfileHeader = memo((props: IProfilePageHeaderProps) => {
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
              data-testid="EditableProfileHeader__EditButton"
            >
              {t('edit-profile')}
            </Button>
          ) : (
            <HStack gap="8" justify="end">
              <Button
                theme={ButtonTheme.OUTLINED}
                onClick={onSave}
                data-testid="EditableProfileHeader__SaveButton"
              >
                {t('save_edit')}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINED_RED}
                onClick={onCancelEdit}
                data-testid="EditableProfileHeader__CancelButton"
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
