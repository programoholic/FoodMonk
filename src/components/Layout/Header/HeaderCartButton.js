import { useContext, useEffect, useState } from "react";
import CartIcon from "../../Cart/cartIcon";
import classes from "./HeaderCartButton.module.css";
import cartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonHighlighted, setButtonhighlighted] = useState(false);
  const cartCtx = useContext(cartContext);
  const { items } = cartCtx;
  const btnClass = buttonHighlighted
    ? `${classes.button} ${classes.bump} `
    : `${classes.button}`;
  useEffect(() => {
    setButtonhighlighted(true);
    setTimeout(() => setButtonhighlighted(false), 300);
    return () => {
      setButtonhighlighted(false);
    };
  }, [items]);
  const numberOfCartItems = items.reduce((prev, next) => prev + next.amount, 0);
  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}>{numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
