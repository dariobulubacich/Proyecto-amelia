import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ title, price, stock, image, id }) => {
  return (
    <div className="card">
      <img className="imgcard" src={image} alt="" />
      <h2 className="card-detalle">Titulo: {title}</h2>
      <h3 className="card-detalle">Precio: $ {price}</h3>
      <h4 className="card-detalle">Stock: {stock}</h4>
      <Link to={`/itemDetail/${id}`}>
        <button className="button-detalle">Ver detalle</button>
      </Link>
    </div>
  );
};
