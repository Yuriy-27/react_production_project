import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popover/Popover';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification_24_24.svg';
import cls from './NotificationButton.module.scss';

interface INotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: INotificationButtonProps) => {
  const { className } = props;

  return (
    <Popover
      className={classNames(cls.NotificationButton, {}, [className])}
      trigger={(
        <Icon Svg={NotificationIcon} />
      )}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});
