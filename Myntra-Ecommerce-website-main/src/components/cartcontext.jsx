import { createContext, useReducer, useContext } from "react";
import reducer from "./cartreducer";
const CartContext = createContext();
const intialState = {
  cart: [],
  total_items: "",
  tptal_amount: "",

};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const addtobag = (value, prop) => {
    dispatch({ type: "ADD_TO_CART", payload: { value, prop } });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
 

  return (
    <CartContext.Provider value={{ ...state, addtobag, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
