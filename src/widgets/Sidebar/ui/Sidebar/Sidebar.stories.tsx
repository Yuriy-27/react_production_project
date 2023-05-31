import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/constants/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
];

export const NoAuthLight = Template.bind({});
NoAuthLight.args = {};
NoAuthLight.decorators = [
  StoreDecorator({
    user: {},
  }),
];

export const NoAuthDark = Template.bind({});
NoAuthDark.args = {};
NoAuthDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {},
  }),
];
