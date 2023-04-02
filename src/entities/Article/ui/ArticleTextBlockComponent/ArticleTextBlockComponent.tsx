import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface IArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: IArticleTextBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && <Text className={cls.title} title={block.title} />}
      {block.paragraphs.map((paragraph, index) => (
        <Text key={index} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  );
});
