import classes from "./input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}> {props.label} </label>
      <input id={props.input.id} value={props.value} {...props.input} onChange={props.onChange} />
    </div>
  );
};

export default Input;
