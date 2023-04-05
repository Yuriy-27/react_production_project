import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import IconView from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { HStack, VStack } from 'shared/ui/Stack';
import {
  Article, ArticleBlock, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface IArticleListItemProps {
  className?: string;
  article: Article;
  viewMode: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
  const {
    className,
    article,
    viewMode,
    target,
  } = props;
  const { t } = useTranslation();

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={IconView} className={cls.icon} />
    </>
  );

  if (viewMode === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block: ArticleBlock) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <VStack className={classNames(cls.ArticleListItem, {}, [className, cls[viewMode]])}>
        <Card className={cls.card}>
          <HStack maxWidth justify="between">
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </HStack>
          <Text title={article.title} className={cls.title} />
          {types}
          <img alt={article.title} src={article.img} className={cls.img} />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
          )}
          <HStack maxWidth gap="8">
            <AppLink
              className={cls.link}
              to={RoutePaths.article_details + article.id}
            >
              <Button theme={ButtonTheme.OUTLINED}>
                {t('read_more')}
              </Button>
            </AppLink>
            {views}
          </HStack>
        </Card>
      </VStack>
    );
  }

  return (
    <AppLink
      target={target}
      to={RoutePaths.article_details + article.id}
      className={classNames(cls.ArticleListItem, {}, [className, cls[viewMode]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.img} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
