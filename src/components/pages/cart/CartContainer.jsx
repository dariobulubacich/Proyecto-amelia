import "./cartContainer.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);
  let total = getTotalAmount();
  return (
    <div className="cart">
      <h1>Productos del carrito</h1>

      {cart.map((product) => {
        return (
          <div key={product.id}>
            <div className="div-producto">
              <h2>{product.title}</h2>
              <h3>Cantidad: {product.quantity}</h3>
              <button
                className="button-eliminar"
                onClick={() => removeById(product.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        );
      })}
      <div className="div-finalizar">
        <button className="button-limcarrito" onClick={resetCart}>
          Limpiar carrito
        </button>
        <h2 className="total">Total a abonar: $ {total}</h2>
        <Link className="button-limcarrito" to="/checkout">
          Terminar compra
        </Link>
      </div>
    </div>
  );
};

export default CartContainer;
