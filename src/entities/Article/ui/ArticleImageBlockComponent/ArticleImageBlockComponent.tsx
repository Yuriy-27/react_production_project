import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface IArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: IArticleImageBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img alt={block.title} className={cls.img} src={block.src} />
      {block.title && (
        <Text
          theme={TextTheme.SECONDARY}
          className={cls.title}
          align={TextAlign.CENTER}
          title={block.title}
        />
      )}
    </div>
  );
});
