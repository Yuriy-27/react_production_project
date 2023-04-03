import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/lib/types/sortOrder';
import { ArticleSortField } from '../../model/types/article';
import cls from './ArticleSortSelectors.module.scss';

interface ArticleSortSelectorsProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (order: SortOrder) => void;
  onChangeSort: (sort: ArticleSortField) => void;
}

export const ArticleSortSelectors = memo((props: ArticleSortSelectorsProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
  } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
    {
      label: t('sort_order_asc'),
      value: 'asc',
    },
    {
      label: t('sort_order_desc'),
      value: 'desc',
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
    {
      label: t('sort_by_created_at'),
      value: ArticleSortField.CREATED_AT,
    },
    {
      label: t('sort_by_title'),
      value: ArticleSortField.TITLE,
    },
    {
      label: t('sort_by_views'),
      value: ArticleSortField.VIEWS,
    },
  ], [t]);

  return (
    <div className={classNames(cls.ArticleSortSelectors, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('sort_by')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        className={cls.order}
        options={orderOptions}
        label={t('sort_order')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
