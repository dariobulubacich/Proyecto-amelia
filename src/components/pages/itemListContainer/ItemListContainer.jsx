// import { Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { useEffect } from "react";
import { products } from "../../../products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const unaParte = products.filter((producto) => producto.category === name);
    const getProducts = new Promise((resolve) => {
      resolve(name ? unaParte : products);
    });
    getProducts.then((res) => {
      setItems(res);
    });
  }, [name]);
  return <ItemList items={items} />;
};