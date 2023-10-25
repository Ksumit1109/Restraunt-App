import './Header.css';
import img from './meals.jpg'

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
                <img className="img img-fluid" src={img} alt="Coming Soon..." />
                <div className="position-absolute start-50 top-50 mt-3 translate-middle text-center text-white">
                    <div className="bg-secondary px-3 rounded">
                        <h1 className="text-white">Delicious Food, Delivered To You</h1>
                        <p className='fw-bold'>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
                        <p className='fw-bold'>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

