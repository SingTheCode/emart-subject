import TopMenuBarContainer from "components/blocks/TopMenuBar";
import ProductContainer from "components/blocks/Product";
import TopNavBar from "components/blocks/TopNavBar/TopNavBar";
import { HomeProps } from ".";
import styles from "./styles";

const Home = ({ productList }: HomeProps) => {
  return (
    <>
      <TopNavBar />
      <styles.HomePage>
        <styles.Title>금주의 전단 상품을 만나보세요</styles.Title>
        <TopMenuBarContainer />
        <styles.ProductList>
          {productList.map(
            (
              {
                type,
                productImgSrc,
                previousPrice,
                price,
                title,
                eventContent,
                discountContent,
                like,
                review,
              },
              idx
            ) => (
              <ProductContainer
                key={idx}
                type={type}
                productImgSrc={productImgSrc}
                previousPrice={previousPrice}
                price={price}
                title={title}
                eventContent={eventContent}
                discountContent={discountContent}
                like={like}
                review={review}
              />
            )
          )}
        </styles.ProductList>
      </styles.HomePage>
    </>
  );
};

export default Home;
