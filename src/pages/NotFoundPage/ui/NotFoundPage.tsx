import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(({ className }: INotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('not_found_page')}
    </div>
  );
});
