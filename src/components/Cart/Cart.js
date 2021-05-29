import { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const total = items.reduce(
    (prev, next) => prev + next.amount * next.price,
    0
  );
  const addCartItemHandler = (item) => {
      cartCtx.addItem({...item,amount:1})
  }
  const removeCartItemHandler = (id) => {
     cartCtx.removeItem(id)
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          name={item.name}
          key={item.id}
          price={item.price}
          amount={item.amount}
          onAdd={addCartItemHandler.bind(null,item)}
          onRemove={removeCartItemHandler.bind(null,item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{total.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {items.length > 0 ? (
          <button className={classes.button}>Order</button>
        ) : (
          ""
        )}
      </div>
    </Modal>
  );
};

export default Cart;
