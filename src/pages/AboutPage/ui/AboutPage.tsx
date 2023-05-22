import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import cls from './AboutPage.module.scss';

function AboutPage() {
  const { t } = useTranslation('about');

  return (
    <Page className={cls.AboutPage}>{t('about-page')}</Page>
  );
}

export default memo(AboutPage);
