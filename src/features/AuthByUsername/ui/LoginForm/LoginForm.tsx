import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
  className?: string;
}

export const LoginForm: FC<ILoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        autofocus
        label={t('username')}
      />
      <Input
        type="text"
        className={cls.input}
        label={t('password')}
      />
      <Button className={cls.loginButton}>{t('login')}</Button>
    </div>
  );
};
