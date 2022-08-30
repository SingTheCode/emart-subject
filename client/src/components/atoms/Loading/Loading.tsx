import ReactLoading from "react-loading";

import styles from "./styles";

const Loading = () => (
  <styles.LoadingBox>
    <ReactLoading type="spin" color="#FFBF1E" />
  </styles.LoadingBox>
);

export default Loading;
