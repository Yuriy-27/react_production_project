import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal: FC<IPortalProps> = (props) => {
  const { children, element } = props;

  return createPortal(children, element || document.body);
};
