import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/constants/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text: `import { ComponentStory, ComponentMeta } from '@storybook/react';
  import { Theme } from 'app/providers/ThemeProvider';
  import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
  import { Code } from './Code';

  export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as ComponentMeta<typeof Code>;

  const Template: ComponentStory<typeof Code > = (args) => <Code {...args} />;`,
};
