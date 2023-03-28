import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface IArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: IArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      ArticlesPage
    </div>
  );
};

export default memo(ArticlesPage);
