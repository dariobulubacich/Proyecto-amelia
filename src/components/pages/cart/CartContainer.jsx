import "./cartContainer.css";
import { Link } from "react-router-dom";
const CartContainer = () => {
  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      <Link to="/checkout">Terminar de comprar</Link>
    </div>
  );
};

export default CartContainer;
