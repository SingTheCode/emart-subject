import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProductImage from "../components/ProductImage";

export default {
  title: "Atoms/ProductImage",
  component: ProductImage,
  argTypes: {
    src: { control: "file", accept: ".png" },
  },
} as ComponentMeta<typeof ProductImage>;

const Template: ComponentStory<typeof ProductImage> = (args) => (
  <ProductImage {...args} />
);

export const Default = Template.bind({});
