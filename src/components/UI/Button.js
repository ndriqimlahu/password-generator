import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes["btn-generate"]}
      id="generate"
      onClick={props.generate}
    >
      Generate Password
    </button>
  );
};

export default Button;
