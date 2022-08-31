import ProductListContainer from "components/blocks/ProductList";
import TopMenuBarContainer from "components/blocks/TopMenuBar";
import TopNavBar from "components/blocks/TopNavBar/TopNavBar";
import styles from "./styles";

const Home = () => {
  return (
    <>
      <TopNavBar />
      <styles.HomePage>
        <styles.Title>금주의 전단 상품을 만나보세요</styles.Title>
        <TopMenuBarContainer />
        <ProductListContainer />
      </styles.HomePage>
    </>
  );
};

export default Home;
