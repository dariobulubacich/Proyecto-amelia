import { createContext, useState } from "react"; /*esta linea siempre*/
export const CartContext = createContext(); /*esta linea siempre*/

// exportacion del componente de react que provea el contexto

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [{} {} {} ] /*esta linea siempre*/

  console.log(cart);

  const addToCart = (product) => {
    let agregarONo = cart.some((el) => el.id === product.id);
    if (agregarONo) {
      let revisarDuplicado = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(revisarDuplicado);
    } else {
      setCart([...cart, product]);
    }
  };

  const resetCart = () => {
    setCart([]);
  };

  const removeById = (id) => {
    let arrayFiltrado = cart.filter((elemento) => elemento.id !== id);
    setCart(arrayFiltrado);
  };
  //cambiar getTotalQuantity por getCantidades
  const getCantidades = (id) => {
    const producto = cart.find((elemento) => elemento.id === id);
    return producto ? producto.quantity : 0;
    // if (producto) {
    //   return producto.quantity;
    // } else {
    //   return 0;
    // }
  };

  const getTotalAmount = () => {
    // [ {} {}]
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.price * elemento.quantity;
    }, 0); // devuelve el acumulador

    return total;
  };
  // const getProductosTotales=()=> {
  //   let sumarProductosTotales=cart.reduce((acumuladoCarrito, elemento)=>{
  //     return acumuladoCarrito + elemento.quantity;
  //   }, 0);
  //   return sumarProductosTotales;
  // }

  let data = {
    cart,
    addToCart,
    removeById,
    resetCart,
    getCantidades,
    getTotalAmount,
    //getProductosTotales,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
