import { useContext, useEffect, useState } from "react";
import { products } from "../../../products";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart, getCantidades } = useContext(CartContext);
  let totalEnCarrito = getCantidades(id);
  const [item, setItem] = useState({});

  useEffect(() => {
    let productSelected = products.find((producto) => producto.id === id);
    setItem(productSelected);
  }, [id]);
  const agregarAlCarrito = (cantidad) => {
    let objeto = { ...item, quantity: cantidad };
    addToCart(objeto);
  };

  return (
    <ItemDetail
      item={item}
      agregarAlCarrito={agregarAlCarrito}
      totalEnCarrito={totalEnCarrito}
    />
  );
};

export default ItemDetailContainer;
