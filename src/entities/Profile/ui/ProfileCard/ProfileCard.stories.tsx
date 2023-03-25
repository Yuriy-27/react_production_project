import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AvatarImage from 'shared/assets/images/storybook/avatar.png';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    userName: 'admin',
    firstName: 'Yurii',
    lastName: 'Shchebetun',
    age: 31,
    country: Country.UA,
    city: 'Kyiv',
    currency: Currency.UAH,
    avatar: AvatarImage,
  },
};

export const Dark = Template.bind({});
Dark.args = {
  data: {
    userName: 'admin',
    firstName: 'Yurii',
    lastName: 'Shchebetun',
    age: 31,
    country: Country.UA,
    city: 'Kyiv',
    currency: Currency.UAH,
    avatar: AvatarImage,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.args = {
  error: 'Error message',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
