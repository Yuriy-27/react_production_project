import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div className={cls.MainPage}>
      {t('main-page')}
    </div>
  );
}

export default memo(MainPage);
