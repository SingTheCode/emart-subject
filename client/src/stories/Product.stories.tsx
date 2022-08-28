import { ComponentStory, ComponentMeta } from "@storybook/react";

import Product from "../components/blocks/Product/Product";

export default {
  title: "Blocks/Product",
  component: Product,
  argTypes: {
    productImgSrc: { control: "file" },
    previousPrice: { control: "text" },
    price: { control: "text" },
    title: { control: "text" },
    eventContent: { control: "object" },
    discountContent: { control: "object" },
    like: { control: "number" },
    review: { control: "number" },
  },
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = (args) => (
  <Product {...args} />
);

export const Default = Template.bind({});
Default.args = {
  productImgSrc: "",
  previousPrice: "16,980/6,980",
  price: "13,584/5,584",
  title: "자연주의 유기농 참기름/볶음참깨",
  eventContent: ["해양수산부 행사상품"],
  discountContent: ["신세계포인트 적립 시 20% 할인"],
  like: 442,
  review: 29,
};
