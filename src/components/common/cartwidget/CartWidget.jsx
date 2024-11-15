import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./cartwidget.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link to="/cart">
      <FaCartArrowDown />
      <span>{cart.length}</span>
    </Link>
  );
};
