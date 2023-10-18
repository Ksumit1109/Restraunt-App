import './Header.css'
import img from './Carousel.png'


const Header = ()=>{
    return(
        <>
            <nav className="bg-color navbar">
                <div className="logo">React Meals</div>
                <div className="border rounded-pill p-2 me-5 border-0">
                    <div className="cart"> 🛒 Your cart
                    <div className="bg-danger pe-3 ps-3 list-unstyled border rounded-pill ms-3 border-0">0</div>
                    </div>
                </div>
            </nav>
                <div>
                        <img className="img" src={img} height={50} alt="Coming Soon..." />
                </div>
        </>
    )
}

export default Header;