import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AvatarImage from '@/shared/assets/images/storybook/avatar.png';
import { CommentList } from './CommentList';

export default {
  title: 'entities/Comments/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      id: '1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.',
      user: {
        username: 'admin',
        id: '1',
        avatar: AvatarImage,
      },
    },
    {
      id: '2',
      text: 'Lorem ipsum dolor sit amet, aliquam nisl, nec aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.',
      user: {
        username: 'user2',
        id: '2',
        avatar: AvatarImage,
      },
    },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  comments: [
    {
      id: '1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.',
      user: {
        username: 'admin',
        id: '1',
        avatar: AvatarImage,
      },
    },
    {
      id: '2',
      text: 'Lorem ipsum dolor sit amet, aliquam nisl, nec aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.',
      user: {
        username: 'user2',
        id: '2',
        avatar: AvatarImage,
      },
    },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};
