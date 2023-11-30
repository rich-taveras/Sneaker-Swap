import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"
import Nike from "../components/Nike/Nike"
import ShopHero from "../components/ShopHero/ShopHero"
import ProductList from "../components/ProductList"

const Womens = ()=>{
    const name = "Women's Shoes";
  const img =
    "https://eurotas-demo.myshopify.com/cdn/shop/files/slideshow-v2-img1.jpg?v=1613749158";
    return(
        <>
        <NavBar/>
        <ShopHero name = {name} img = {img}/>
        <ProductList/>
        <Nike/>
        <Footer/>
        </>
    )
}
export default Womens