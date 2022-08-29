import styles from "./styles";

const TopNavBar = () => (
  <styles.NavBar>
    <styles.LeftHeader>
      <styles.IconImg src="assets/back.svg" />
      <styles.IconImg src="assets/home.svg" />
    </styles.LeftHeader>
    <styles.CenterTitle>금주의 전단광고</styles.CenterTitle>
    <styles.IconImg src="assets/menu.svg" />
  </styles.NavBar>
);

export default TopNavBar;
