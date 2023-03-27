import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes["btn-generate"]}
      id="generate"
      onClick={props.generate}
      onChange={props.handleCheckboxes}
    >
      Generate Password
    </button>
  );
};

export default Button;
