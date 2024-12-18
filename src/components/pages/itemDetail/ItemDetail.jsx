import "./itemDetail.css";
import Counter from "../../common/counter/Counter";
const ItemDetail = ({ item, agregarAlCarrito, totalEnCarrito }) => {
  return (
    <div className="descripcion">
      <h2>{item.description}</h2>
      <img src={item.imageUrl} alt="" />
      <Counter
        stock={item.stock}
        agregarAlCarrito={agregarAlCarrito}
        totalEnCarrito={totalEnCarrito}
      />
    </div>
  );
};

export default ItemDetail;
