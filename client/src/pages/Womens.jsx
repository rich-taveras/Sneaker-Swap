
import Nike from "../components/Nike/Nike"
import ShopHero from "../components/ShopHero/ShopHero"
import ProductList from "../components/ProductList"

const Womens = ()=>{
    const name = "Women's Shoes";
  const img =
    "https://eurotas-demo.myshopify.com/cdn/shop/files/slideshow-v2-img1.jpg?v=1613749158";
    return(
        <>
       
        <ShopHero name = {name} img = {img}/>
        <ProductList/>
        <Nike/>
        
        </>
    )
}
export default Womens