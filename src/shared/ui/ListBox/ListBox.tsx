import { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import CheckIcon from 'shared/assets/icons/check_circle-24-24.svg';
import { Icon } from '../Icon/Icon';
import { VStack } from '../Stack';
import cls from './ListBox.module.scss';

export interface ListboxItem {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = 'up' | 'down';

interface ListboxProps {
  className?: string;
  items?: ListboxItem[];
  value?: string;
  defaultValue?: string;
  onChange: <T extends string>(value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const mapOptionsDirectionClasses: Record<DropdownDirection, string> = {
  up: cls.optionsUp,
  down: cls.optionsDown,
};

export function ListBox(props: ListboxProps) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'down',
    label,
  } = props;

  return (
    <VStack gap="8">
      {label && <span>{label}</span>}
      <HListbox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, { [cls.disabled]: readonly }, [className])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button className={cls.trigger}>
          {value ?? defaultValue ?? 'Select an option'}
        </HListbox.Button>
        <HListbox.Options className={classNames(cls.options, {}, [mapOptionsDirectionClasses[direction]])}>
          {items?.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.option, {
                    [cls.active]: active,
                    [cls.disabled]: item.disabled,
                  })}
                >
                  {selected && <Icon className={cls.checkedIcon} Svg={CheckIcon} />}
                  {item.label}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </VStack>
  );
}
