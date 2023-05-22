import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AvatarImage from '@/shared/assets/images/storybook/avatar.png';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  profile: {
    form: {
      userName: 'admin',
      firstName: 'Yurii',
      lastName: 'Shchebetun',
      age: 31,
      country: Country.UA,
      city: 'Kyiv',
      currency: Currency.UAH,
      avatar: AvatarImage,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        userName: 'admin',
        firstName: 'Yurii',
        lastName: 'Shchebetun',
        age: 31,
        country: Country.UA,
        city: 'Kyiv',
        currency: Currency.UAH,
        avatar: AvatarImage,
      },
    },
  })];
