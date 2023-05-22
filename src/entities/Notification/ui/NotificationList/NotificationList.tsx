import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useGetNotificationsQuery } from '../../api/notificationsApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface INotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: INotificationListProps) => {
  const { className } = props;
  const { data, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VStack
        gap="16"
        maxWidth
        className={classNames(cls.NotificationList, {}, [className])}
      >
        <Skeleton width="100%" border="8px" height={80} />
        <Skeleton width="100%" border="8px" height={80} />
      </VStack>
    );
  }

  return (
    <VStack
      gap="16"
      maxWidth
      className={classNames(cls.NotificationList, {}, [className])}
    >
      {data?.map((notification) => (
        <NotificationItem
          key={notification.id}
          item={notification}
        />
      ))}
    </VStack>
  );
});
