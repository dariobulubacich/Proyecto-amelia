import { useState } from "react";
import Swal from "sweetalert2";
import "./counter.css";

const Counter = ({ stock, agregarAlCarrito, totalEnCarrito }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    stock - totalEnCarrito > contador
      ? setContador(contador + 1)
      : Swal.fire({
          icon: "error",
          title: "Stock maximo alcanzado",
          text: "",
          footer: '<a href="#"></a>',
        });
  };
  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <div className="div-counter">
      <button className="button-counter" onClick={sumar}>
        sumar
      </button>
      <h2>Contador = {contador}</h2>
      <button className="button-counter" onClick={restar}>
        restar
      </button>
      <button
        className="button-counter"
        onClick={() => agregarAlCarrito(contador)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
