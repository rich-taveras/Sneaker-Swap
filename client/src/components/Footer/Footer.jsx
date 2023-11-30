const Footer = ()=>{
    return(
        <section className="px-5 pt-5 mt-5 col-12 bg-dark text-light">
            <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-row col-6">
                <h4>Contact</h4>
            <span className="col-12"><i className="fa-solid fa-house mx-2"></i>Address of the Store</span>
            <span className="col-12"><i className="fa-solid fa-phone mx-2"></i>Telephone: +1 555 555 55</span>
            <span className="col-12"><i className="fa-solid fa-envelope mx-2"></i>Email: email@gmail.com</span>
            <span className="col-12"><i className="fa-solid fa-clock mx-2"></i>8:00-19:00, Monday-Saturday</span>
            </div>
            <div className="d-flex flex-row col-6  ">
                <h4>My Account</h4>
            <span className="col-12">My Account</span>
            <span className="col-12">Login</span>
            <span className="col-12">My Cart</span>
            <span className="col-12">Wishlist</span>
            </div>            
            </div>
            <div className="col-12 mt-3 d-flex justify-content-between">
            <h6>Copyright © 2023 By ESneaker-Swap. All Rights Reserved.</h6>
            </div>
        </section>
    )
}
export default Footer