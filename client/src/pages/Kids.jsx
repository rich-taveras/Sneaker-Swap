import Nike from "../components/Nike/Nike";
import ShopHero from "../components/ShopHero/ShopHero";
import ProductList from "../components/ProductList";

const Kids = () => {
  const name = "Kid's Shoes";
  const img =
    "https://eurotas-demo.myshopify.com/cdn/shop/files/bg-blog.jpg?v=1613769904";
  return (
    <>
      <ShopHero name={name} img={img} />
      <ProductList />
      <Nike />
    </>
  );
};
export default Kids;
