import { ComponentStory, ComponentMeta } from "@storybook/react";

import Content from "../components/Content";

export default {
  title: "Atoms/Content",
  component: Content,
  argTypes: {
    content: { control: "text" },
    type: { control: "text" },
  },
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = (args) => (
  <Content {...args} />
);

export const Event = Template.bind({});
Event.args = {
  content: "신세계포인트 적립 시 25% 할인",
  type: "event",
};

export const Discount = Template.bind({});
Discount.args = {
  content: "신세계포인트 적립 시 25% 할인",
  type: "discount",
};
