import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import NewArrivalTxt from "../components/NewArrivalTxt/NewArrivalTxt";
import ImageHooded from "../components/ImageHooded/ImageHooded";
import ProductList from "../components/ProductList";

import ButtonLogIn from "../components/ButtonLogIn/ButtonLogIn";

const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <ButtonLogIn/>
      <NewArrivalTxt />
      <ProductList />
      <ImageHooded />
    </>
  );
};

export default Home;
