import { useContext, useState } from "react";
import "./checkout.css";
import { CartContext } from "../../../context/CartContext";

import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    const total = getTotalAmount();

    const order = {
      buyer: userInfo,
      items: cart, //[ {} {} {}]
      total,
    };

    let refCollection = collection(db, "orders");
    addDoc(refCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    });

    let refCol = collection(db, "products");
    order.items.forEach((item) => {
      let refDoc = doc(refCol, item.id);
      updateDoc(refDoc, { stock: item.stock - item.quantity });
    });
  };

  const capturarInfo = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  if (orderId) {
    return <h2 className="h2-compra">Tu ticket de compra es : {orderId}</h2>;
  }

  const deleteById = (id) => {
    // refColl
    // refDoc
    // deleteDoc( refDoc )
  };

  return (
    <div className="div-form">
      <form onSubmit={funcionDelFormulario}>
        <input
          className="imputs"
          type="text"
          placeholder="Apellido y Nombre"
          name="name"
          onChange={capturarInfo}
        />
        <input
          className="imputs"
          type="email"
          placeholder="Ejemplo: ejemplo@gmail.com"
          name="email"
          onChange={capturarInfo}
        />
        <input
          className="imputs"
          type="text"
          placeholder="Telefono"
          name="phoneNumber"
          onChange={capturarInfo}
        />
        <div className="div-btn">
          <button className="btn">Comprar</button>
          <button className="btn" type="button">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
