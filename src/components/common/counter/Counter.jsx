import { useState } from "react";

const Counter = ({ stock, agregarAlCarrito, totalEnCarrito }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    stock - totalEnCarrito > contador
      ? setContador(contador + 1)
      : alert("stock maximo"); //cambiar por swit alert
  };
  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <button onClick={sumar}>sumar</button>
      <h2>Contador = {contador}</h2>
      <button onClick={restar}>restar</button>
      <button onClick={() => agregarAlCarrito(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
