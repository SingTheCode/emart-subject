import { ComponentStory, ComponentMeta } from "@storybook/react";

import TopNavBar from "../components/blocks/TopNavBar/TopNavBar";

export default {
  title: "Blocks/TopNavBar",
  component: TopNavBar,
} as ComponentMeta<typeof TopNavBar>;

const Template: ComponentStory<typeof TopNavBar> = () => <TopNavBar />;

export const Default = Template.bind({});
