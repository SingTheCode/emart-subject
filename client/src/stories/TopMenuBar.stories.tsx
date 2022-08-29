import { ComponentStory, ComponentMeta } from "@storybook/react";

import TopMenuBar from "../components/blocks/TopMenuBar/TopMenuBar";

export default {
  title: "Blocks/TopMenuBar",
  component: TopMenuBar,
  argTypes: {
    menuList: { control: "object" },
    selectedMenu: { control: "text" },
  },
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
} as ComponentMeta<typeof TopMenuBar>;

const Template: ComponentStory<typeof TopMenuBar> = (args) => (
  <TopMenuBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  menuList: [
    "전체",
    "가공",
    "신선",
    "대한민국수산대전",
    "시니어 WEEK",
    "마음은 가볍게 준비는 완벽히",
    "SUMMER 클e어런스",
    "금주의 초특가 찬스",
  ],
};
