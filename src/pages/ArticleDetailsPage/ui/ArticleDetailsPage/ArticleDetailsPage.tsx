import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface IArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: IArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      ArticleDetailsPage
    </div>
  );
};

export default memo(ArticleDetailsPage);
