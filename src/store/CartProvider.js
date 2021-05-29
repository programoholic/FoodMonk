import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const { items } = state;
  let updatedItems;
  if (action.type === "ADD") {
    const existingItemIndex = items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = items[existingItemIndex];
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  } else if (action.type === "REMOVE") {
    const itemIndex = items.findIndex((item) => item.id === action.id);
    const existingItem = items[itemIndex];
    updatedItems = [...items];
    debugger
    if (existingItem.amount === 1) {
      updatedItems = items.filter(item=>item.id !==action.id)
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems[itemIndex] = updatedItem;
    } 
    const updatedAmount = state.totalAmount - existingItem.price * 1;
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
