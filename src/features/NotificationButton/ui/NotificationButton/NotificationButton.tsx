import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popover/Popover';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification_24_24.svg';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import cls from './NotificationButton.module.scss';

interface INotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: INotificationButtonProps) => {
  const { className } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const trigger = (
    <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
      <Icon Svg={NotificationIcon} />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover
          className={classNames(cls.NotificationButton, {}, [className])}
          trigger={trigger}
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer
          isOpen={isDrawerOpen}
          onClose={onCloseDrawer}
        >
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  );
});
