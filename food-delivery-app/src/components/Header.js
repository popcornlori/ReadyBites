import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './Header.css';

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">FoodExpress</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <Link to="/checkout">Cart ({cart.length})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;