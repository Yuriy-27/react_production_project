import { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/lib/types/ui';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
 }

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

const mapOptionsDirectionClasses: Record<DropdownDirection, string> = {
  'top right': cls.topRight,
  'top left': cls.topLeft,
  'bottom right': cls.bottomRight,
  'bottom left': cls.bottomLeft,
};

export function Dropdown(props: DropdownProps) {
  const {
    className,
    items,
    trigger,
    direction = 'bottom right',
  } = props;

  const menuClasses = classNames(cls.menu, {}, [mapOptionsDirectionClasses[direction]]);

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.button}>
        { trigger }
      </Menu.Button>
      <Menu.Items className={menuClasses}>
        {items.map((item) => {
          const content = ({ active }: {active: boolean}) => (
            <button
              disabled={item.disabled}
              type="button"
              className={classNames(cls.item, { [cls.active]: active })}
              onClick={item.onClick}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                disabled={item.disabled}
                to={item.href}
              >
                {content}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
