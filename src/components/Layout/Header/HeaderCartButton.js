import { useContext } from "react";
import CartIcon from "../../Cart/cartIcon";
import classes from "./HeaderCartButton.module.css";
import cartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext);
  const numberOfCartItems = cartCtx.items.reduce(
    (prev, next) => prev + next.amount,
    0
  );
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}>{numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
