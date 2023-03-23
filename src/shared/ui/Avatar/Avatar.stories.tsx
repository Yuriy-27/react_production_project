import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImage from '../../assets/images/storybook/avatar.png';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: AvatarImage,
  size: 150,
};

export const Small = Template.bind({});
Small.args = {
  src: AvatarImage,
  size: 50,
};
