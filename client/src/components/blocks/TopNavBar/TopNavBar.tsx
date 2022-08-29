import styles from "./styles";
import Back from "api/images/back.svg";
import Home from "api/images/home.svg";
import Menu from "api/images/menu.svg";

const TopNavBar = () => (
  <styles.NavBar>
    <styles.LeftHeader>
      <styles.IconImg src={Back} />
      <styles.IconImg src={Home} />
    </styles.LeftHeader>
    <styles.CenterTitle>금주의 전단광고</styles.CenterTitle>
    <styles.IconImg src={Menu} />
  </styles.NavBar>
);

export default TopNavBar;
