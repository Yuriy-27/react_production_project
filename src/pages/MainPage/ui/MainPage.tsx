import { memo } from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('main-page')}
    </div>
  );
}

export default memo(MainPage);
