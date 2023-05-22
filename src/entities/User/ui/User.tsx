import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './User.module.scss';

interface IUserProps {
  className?: string;
}

export const User: FC<IUserProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.User, {}, [className])}>
      User
    </div>
  );
};
