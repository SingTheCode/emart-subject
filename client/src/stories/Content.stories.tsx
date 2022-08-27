import { ComponentStory, ComponentMeta } from "@storybook/react";

import Content from "../components/Content";

export default {
  title: "Components/Content",
  component: Content,
  argTypes: {
    content: { control: "text" },
    type: { control: "text" },
  },
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = (args) => (
  <Content {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: "신세계포인트 적립 시 25% 할인",
};
