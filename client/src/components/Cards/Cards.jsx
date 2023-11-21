import Card1 from "./Card1/Card1"
import Card2 from "./Card2/Card2"
const Cards = ()=>{
    const imgCard1 = "https://eurotas-demo.myshopify.com/cdn/shop/files/banner-v1-img1.jpg?v=1613749086"
    const imgCard2 = "https://eurotas-demo.myshopify.com/cdn/shop/files/banner-v1-img2.jpg?v=1613749086"
    const imgCard3 = "https://eurotas-demo.myshopify.com/cdn/shop/files/banner-v2-img2.jpg?v=1613749090"
    const imgCard4 = "https://eurotas-demo.myshopify.com/cdn/shop/files/banner-v2-img1.jpg?v=1613749087"
    return(
        <>
        <section className="d-flex flex-row"> 
        <Card1 url={imgCard1}/>
        <Card2 url={imgCard2}/>
        <Card2 url={imgCard3}/>
        <Card1 url={imgCard4}/>
        </section>
        </>
    )
}
export default Cards