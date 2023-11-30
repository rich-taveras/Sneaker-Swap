import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import NewArrivalTxt from "../components/NewArrivalTxt/NewArrivalTxt";
import ImageHooded from "../components/ImageHooded/ImageHooded";
import Footer from "../components/Footer/Footer";
import ProductList from "../components/ProductList";


const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Cards />
      <NewArrivalTxt />      
      <ProductList />
      <ImageHooded />
      <Footer />
    </>
  );
};

export default Home;
