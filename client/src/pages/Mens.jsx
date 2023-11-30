import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Nike from "../components/Nike/Nike";
import ShopHero from "../components/ShopHero/ShopHero";
import ProductList from "../components/ProductList";

const Mens = () => {
  const name = "Men's Shoes";
  const img =
    "https://eurotas-demo.myshopify.com/cdn/shop/files/slideshow-v5-img1.jpg?v=1613762448";
    
  return (
    <>
      <NavBar />
      <ShopHero name = {name} img = {img}/>
      <ProductList />
      <Nike />
      <Footer />
    </>
  );
};
export default Mens;
