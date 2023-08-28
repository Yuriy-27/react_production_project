import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import cls from './ProfilePage.module.scss';

interface IProfilePageProps {
  className?: string | undefined;
}

const ProfilePage: FC<IProfilePageProps> = (props) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  return (
    <Page
      className={classNames(cls.ProfilePage, {}, [className])}
      data-testid="ProfilePage"
    >
      <VStack maxWidth className={cls.profileWrapper}>
        <EditableProfileCard className={cls.profile} id={id} />
      </VStack>
    </Page>
  );
};

export default memo(ProfilePage);
