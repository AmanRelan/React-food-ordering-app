import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  //Subscribing to the store using selector.
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 text-2xl text-orange-300">
            <Link to="/cart" className="flex align-middle">
              <FaShoppingCart value={{ className: "bg-c" }} />
              <span className="px-4 -m-2">-({cartItems.length})</span>
            </Link>
          </li>
          <li className="px-2">{onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
