import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CartWidget.css";
export const CartWidget = () => {
  return (
    <Link to="/cart">
      <FaCartArrowDown />
      <span>0</span>
    </Link>
  );
};
