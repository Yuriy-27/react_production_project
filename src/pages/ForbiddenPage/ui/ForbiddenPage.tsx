import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page';

interface IForbiddenPageProps {
  className?: string;
}

export const ForbiddenPage = memo((props: IForbiddenPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames('', {}, [className])}>
      <Text text={t('no_access')} />
    </Page>
  );
});
