import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { value: '1', label: 'Durward Reynolds', disabled: false },
    { value: '2', label: 'Kenton Towne', disabled: false },
    { value: '3', label: 'Therese Wunsch', disabled: false },
    { value: '4', label: 'Benedict Kessler', disabled: true },
    { value: '5', label: 'Katelyn Rohan', disabled: false },
  ],
};
