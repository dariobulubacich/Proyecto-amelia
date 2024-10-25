import "./itemDetail.css";
const ItemDetail = ({ item }) => {
  return (
    <div className="descripcion">
      <h2>{item.description}</h2>
      <img src={item.imageUrl} alt="" />
    </div>
  );
};

export default ItemDetail;
