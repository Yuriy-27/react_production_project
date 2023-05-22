import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AvatarImage from '@/shared/assets/images/storybook/avatar.png';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/Comments/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comment: {
    id: '1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.',
    user: {
      username: 'admin',
      id: '1',
      avatar: AvatarImage,
    },
  },
};

export const Dark = Template.bind({});
Dark.args = {
  comment: {
    id: '1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.',
    user: {
      username: 'admin',
      id: '1',
      avatar: AvatarImage,
    },
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
