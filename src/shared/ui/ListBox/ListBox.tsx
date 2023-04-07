import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import {
  useFloating,
  useClick,
  useInteractions,
  flip,
  offset,
} from '@floating-ui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import CheckIcon from 'shared/assets/icons/check-20-20.svg';
import { Icon } from '../Icon/Icon';
import { VStack } from '../Stack';
import cls from './ListBox.module.scss';

export interface ListboxItem<T extends string> {
  value: T;
  label: ReactNode;
  disabled?: boolean;
}

interface ListboxProps<T extends string> {
  className?: string;
  label?: string;
  value?: T;
  items?: ListboxItem<T>[];
  defaultValue?: string;
  onChange: (value: T) => void;
  readonly?: boolean;
}

export const ListBox = <T extends string>(props: ListboxProps<T>) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    label,
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
    <VStack gap="8">
      <HListbox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, { [cls.disabled]: readonly }, [className])}
        value={value}
        onChange={onChange}
      >
        {label && <HListbox.Label className={cls.label}>{label}</HListbox.Label>}
        <HListbox.Button ref={refs.setReference} {...getReferenceProps()} className={cls.trigger}>
          {items?.find((item) => item.value === value)?.label ?? defaultValue ?? 'Select an option'}
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {})}
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
          {...getFloatingProps()}
        >
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
                    [cls.selected]: selected,
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
};
