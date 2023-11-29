
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import ShoesCard from "../components/Cards/ShoesCard/ShoesCard";
import NewArrivalTxt from "../components/NewArrivalTxt/NewArrivalTxt";
import ImageHooded from "../components/ImageHooded/ImageHooded";
import Footer from "../components/Footer/Footer";
import ShopHero from "../components/ShopHero/ShopHero";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";

const Home = () => {

 

  return (
    <>
    <NavBar/>
    <Hero/>
    <Cards/>
    <NewArrivalTxt/>
    <ProductList/>
    <ImageHooded/>
    <ShopHero/>
    <Footer/>
   
    </>
  );
};

export default Home;
