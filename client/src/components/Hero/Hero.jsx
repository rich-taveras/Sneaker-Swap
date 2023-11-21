import "../Hero/Hero.css";
import "../Hero/media.css"

const Hero = () => {
  return (
    <>
    
      <div id="carouselExampleDark" className="carousel carousel-dark slide custom-main-section carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
        <div className="position-relative ">
      <img src="https://eurotas-demo.myshopify.com/cdn/shop/files/bg-slideshow-v1.jpg?v=1613770790" className="d-block image" alt="..."/>
      </div>
      <div className="carousel-content">        
        <h5>Men`s Original</h5>
        <h1>New Sneaker Fower.</h1>
      </div>
      
      <div className="carousel-img">
      <img src="https://eurotas-demo.myshopify.com/cdn/shop/files/slideshow-img1.png?v=1613770790" className="d-block w-100" alt=""/>
      </div>
    </div>
    <div className="carousel-item active" data-bs-interval="10000">
        <div className="position-relative ">
      <img src="https://eurotas-demo.myshopify.com/cdn/shop/files/bg-slideshow-v1.jpg?v=1613770790" className="d-block image" alt="..."/>
      </div>
      <div className="carousel-content">        
        <h5>Women`s Original</h5>
        <h1>Autum Winter Fashion.</h1>
      </div>
      <div className="carousel-img">
      <img src="https://eurotas-demo.myshopify.com/cdn/shop/files/slideshow-img1.png?v=1613770790" className="d-block w-100" alt=""/>
      </div>
    </div>
    <div className="carousel-item active" data-bs-interval="10000">
        <div className="position-relative ">
      <img src="https://eurotas-demo.myshopify.com/cdn/shop/files/bg-slideshow-v1.jpg?v=1613770790" className="d-block image" alt="..."/>
      </div>
      <div className="carousel-content">        
        <h5>2024</h5>
        <h1>New Spring Collection.</h1>
      </div>
      <div className="carousel-img">
      <img src="https://eurotas-demo.myshopify.com/cdn/shop/files/slideshow-img1.png?v=1613770790" className="d-block w-100" alt=""/>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  );
};
export default Hero;
