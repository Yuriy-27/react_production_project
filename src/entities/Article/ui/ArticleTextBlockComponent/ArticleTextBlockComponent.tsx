import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack';
import { ArticleTextBlock } from '../../model/types/article';

interface IArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: IArticleTextBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <VStack gap="16" className={classNames('', {}, [className])}>
      {block.title && <Text title={block.title} />}
      <VStack gap="8">
        {block.paragraphs.map((paragraph, index) => (
          <Text key={index} text={paragraph} />
        ))}
      </VStack>
    </VStack>
  );
});
