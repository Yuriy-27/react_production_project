import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { ListBox } from '@/shared/ui/ListBox/ListBox';
import { VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import cls from './MainPage.module.scss';

function MainPage() {
  const { t } = useTranslation('main');

  const people = [
    { value: '1', label: 'Durward Reynolds', disabled: false },
    { value: '2', label: 'Kenton Towne', disabled: false },
    { value: '3', label: 'Therese Wunsch', disabled: false },
    { value: '4', label: 'Benedict Kessler', disabled: true },
    { value: '5', label: 'Katelyn Rohan', disabled: false },
  ];

  return (
    <Page
      className={cls.MainPage}
      data-testid="MainPage"
    >
      {t('main-page')}
      <VStack>
        <ListBox
          value={undefined}
          items={people}
          onChange={(value) => console.log(value)}
        />
        <StarRating />
      </VStack>
    </Page>
  );
}

export default memo(MainPage);
