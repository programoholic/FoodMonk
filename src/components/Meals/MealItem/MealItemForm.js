import { useState } from "react";
import classes from "./mealItemForm.module.css";
import Input from "../../UI/Input/Input";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    if (amount > 5 || amount < 1 || amount === undefined) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    props.onAddToCart(amount);
  };
  const changeHandler = (event) => {
    setAmount(event.target.value);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        onChange={changeHandler}
        value={amount}
        input={{
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          id: `amount_${props.id}`,
        }}
      />
      <button> + Add </button>
      {error && <p> Invalid amount - 1-5 </p>}
    </form>
  );
};
export default MealItemForm;
