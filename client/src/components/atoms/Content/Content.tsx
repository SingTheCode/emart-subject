import React from "react";

import styles from "./styles";
import { ContentState } from "utils/types";

interface ContentProps {
  content?: string;
  type: ContentState;
};

const Content = ({ content, type }: ContentProps) => (
  <>
    {type === "event" ? (
      <styles.EventContent>{content}</styles.EventContent>
    ) : (
      <styles.DiscountContent>{content}</styles.DiscountContent>
    )}
  </>
);

export default Content;
