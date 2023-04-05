import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fourth</div>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fourth</div>
    </>
  ),
  direction: 'column',
};

export const Gap4 = Template.bind({});
Gap4.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fourth</div>
    </>
  ),
  gap: '4',
};

export const Gap12 = Template.bind({});
Gap12.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fourth</div>
    </>
  ),
  gap: '12',
};

export const Gap16 = Template.bind({});
Gap16.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fourth</div>
    </>
  ),
  gap: '16',
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fourth</div>
    </>
  ),
  gap: '16',
  direction: 'column',
};

export const Gap32 = Template.bind({});
Gap32.args = {
  children: (
    <>
      <div>first</div>
      <div>second</div>
      <div>third</div>
      <div>fourth</div>
    </>
  ),
  gap: '32',
};
