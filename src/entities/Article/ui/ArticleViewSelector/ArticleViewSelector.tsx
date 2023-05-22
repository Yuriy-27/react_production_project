import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import GridIcon from '@/shared/assets/icons/grid-24-24.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleViewSelectorProps {
  className?: string;
  viewMode: ArticleView;
  onViewModeChange?: (viewMode: ArticleView) => void;
}

const viewModes = [
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
  {
    view: ArticleView.GRID,
    icon: GridIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const {
    className,
    viewMode,
    onViewModeChange,
  } = props;

  const onIconClick = (viewMode: ArticleView) => () => {
    onViewModeChange?.(viewMode);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewModes.map((viewModeItem) => (
        <Button
          key={viewModeItem.view}
          theme={ButtonTheme.CLEAR}
          onClick={onIconClick(viewModeItem.view)}
        >
          <Icon
            Svg={viewModeItem.icon}
            className={classNames('', { [cls.noActive]: viewMode !== viewModeItem.view })}
          />
        </Button>
      ))}
    </div>
  );
});
