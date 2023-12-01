import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import NewArrivalTxt from "../components/NewArrivalTxt/NewArrivalTxt";
import ImageHooded from "../components/ImageHooded/ImageHooded";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <NewArrivalTxt />
      <ProductList />
      <ImageHooded />
    </>
  );
};

export default Home;
