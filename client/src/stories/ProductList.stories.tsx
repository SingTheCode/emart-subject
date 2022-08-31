import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProductList from "../components/blocks/ProductList/ProductList";

export default {
  title: "Blocks/ProductList",
  component: ProductList,
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = (args) => (
  <ProductList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  productList: [
    {
      productImgSrc: "images/oil.png",
      previousPrice: "16,980/6,980",
      price: "13,584/5,584",
      title: "자연주의 유기농 참기름/볶음참깨",
      eventContent: undefined,
      discountContent: ["신세계포인트 적립 시 20% 할인"],
      like: 442,
      review: 29,
    },
    {
      productImgSrc: "images/oil.png",
      previousPrice: "16,980/6,980",
      price: "13,584/5,584",
      title: "자연주의 유기농 참기름/볶음참깨",
      eventContent: undefined,
      discountContent: ["신세계포인트 적립 시 20% 할인"],
      like: 442,
      review: 29,
    },
    {
      productImgSrc: "images/oil.png",
      previousPrice: "16,980/6,980",
      price: "13,584/5,584",
      title: "자연주의 유기농 참기름/볶음참깨",
      eventContent: undefined,
      discountContent: ["신세계포인트 적립 시 20% 할인"],
      like: 442,
      review: 29,
    },
    {
      productImgSrc: "images/oil.png",
      previousPrice: "16,980/6,980",
      price: "13,584/5,584",
      title: "자연주의 유기농 참기름/볶음참깨",
      eventContent: undefined,
      discountContent: ["신세계포인트 적립 시 20% 할인"],
      like: 442,
      review: 29,
    },
  ],
};
