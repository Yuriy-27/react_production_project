import { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import {
  useFloating,
  useClick,
  useInteractions,
  flip,
  offset,
} from '@floating-ui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
 }

interface DropdownProps {
  // need to set width via className in place where it is used
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
}

export const Dropdown = (props: DropdownProps) => {
  const {
    className,
    items,
    trigger,
  } = props;

  const {
    x, y, strategy, refs, context,
  } = useFloating({
    placement: 'bottom-start',
    middleware: [
      flip({
        fallbackPlacements: ['bottom-start', 'top-start', 'bottom-end', 'top-end'],
        fallbackStrategy: 'bestFit',
      }),
      offset(10),
    ],
  });

  const click = useClick(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
  ]);

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button
        className={cls.button}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        { trigger }
      </Menu.Button>
      <Menu.Items
        className={cls.menu}
        ref={refs.setFloating}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
        }}
        {...getFloatingProps()}
      >
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
                key={item.content as string}
                as={AppLink}
                disabled={item.disabled}
                to={item.href}
              >
                {content}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item
              key={item.content as string}
              as={Fragment}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
