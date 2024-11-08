import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { products } from "../../../products";

export const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let docsRef = productsCollection;
    if (name) {
      docsRef = query(productsCollection, where("category", "==", name));
    }

    getDocs(docsRef).then((res) => {
      let explicacion = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setItems(explicacion);
    });
  }, [name]);

  if (items.length === 0) {
    return (
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  }

  const funcionParaAgregar = () => {
    const productsCollection = collection(db, "products");
    addDoc(productsCollection, { price: 123, title: "123" });

    products.forEach((product) => {
      addDoc(productsCollection, product);
    });
  };

  return (
    <div>
      <ItemList items={items} />
      <button onClick={funcionParaAgregar}>Cargar productos varios</button>
    </div>
  );
};
