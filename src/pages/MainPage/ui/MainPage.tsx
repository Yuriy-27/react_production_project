import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import cls from './MainPage.module.scss';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <Page className={cls.MainPage}>
      {t('main-page')}
    </Page>
  );
}

export default memo(MainPage);
