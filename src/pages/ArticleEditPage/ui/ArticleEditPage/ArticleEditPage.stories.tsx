import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleEditPage from './ArticleEditPage';
import { Theme } from '@/shared/constants/theme';

export default {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = () => <ArticleEditPage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({}),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  StoreDecorator({}),
  ThemeDecorator(Theme.DARK),
];
