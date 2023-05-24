import { memo } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import {
  useFloating,
  useClick,
  useInteractions,
  flip,
  offset,
} from '@floating-ui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';

interface IPopoverProps {
  className?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const Popover = memo((props: IPopoverProps) => {
  const { className, trigger, children } = props;
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
    <HPopover className={classNames(cls.Popover, {}, [className])}>
      <HPopover.Button
        as="div"
        className={cls.trigger}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {trigger}
      </HPopover.Button>
      <HPopover.Panel
        className={cls.panel}
        ref={refs.setFloating}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
        }}
        {...getFloatingProps()}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});
