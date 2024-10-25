import { Card } from "../../common/card/Card";
import "./itemList.css";
const ItemList = ({ items }) => {
  return (
    <>
      <div>
        <h2 className="titulo-item">Productos</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {items.map(({ id, title, price, stock, imageUrl }) => (
          <Card
            key={id}
            title={title}
            price={price}
            stock={stock}
            image={imageUrl}
            id={id}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
