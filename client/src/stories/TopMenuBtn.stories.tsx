import { ComponentStory, ComponentMeta } from "@storybook/react";

import TopMenuBtn from "../components/atoms/TopMenuBtn/TopMenuBtn";

export default {
  title: "Components/TopMenuBtn",
  component: TopMenuBtn,
  argTypes: {
    content: { control: "text" },
    selected: { control: "boolean" },
  },
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
} as ComponentMeta<typeof TopMenuBtn>;

const Template: ComponentStory<typeof TopMenuBtn> = (args) => (
  <TopMenuBtn {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: "가공",
  selected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  content: "전체",
  selected: true,
};
