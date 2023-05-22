import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import cls from './AdminPanelPage.module.scss';

function AdminPanelPage() {
  const { t } = useTranslation('admin');

  return (
    <Page className={cls.AdminPanelPage}>{t('admin-page')}</Page>
  );
}

export default memo(AdminPanelPage);
