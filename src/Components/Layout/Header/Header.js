import './Header.css'
import img from './Carousel.png'


const Header = () => {
    return (
        <>
            <nav className="bg-color navbar logo">
                React Meals
                <button className="btn border btn-outline-dark rounded-pill p-2 me-5 border-0">
                    <div className="cart"> 🛒 Your cart
                        <span className="bg-danger pe-3 ps-3 list-unstyled border rounded-pill ms-3 mt-1 border-0 badge badge-primary">0</span>
                    </div>
                </button>
            </nav>
            <div className="position-relative">
                <img className="img" src={img} height={50} alt="Coming Soon..." />
                <div className="position-absolute shadow p-3 mb-5 rounded top-80 start-50 translate-middle bg-secondary text-center text-white">
                    <h1 className="text-white">Delicious Food, Delivered To You</h1>
                    <h5>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</h5>
                    <h5>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</h5>
                </div>
            </div>

        </>
    )
}

export default Header;