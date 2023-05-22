import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code, CodeTheme } from '@/shared/ui/Code/Code';
import { HStack } from '@/shared/ui/Stack';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface IArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: IArticleCodeBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <HStack maxWidth className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      <Code
        text={block.code}
        theme={CodeTheme.SECONDARY}
      />
    </HStack>
  );
});
