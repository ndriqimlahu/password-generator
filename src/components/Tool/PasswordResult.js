import classes from "./PasswordResult.module.css";

const PasswordResult = (props) => {
  return (
    <div className={classes.result}>
      <div className={classes.result__title}>Result</div>
      <div className={classes.result__box} id="result">
        {props.result}
      </div>
    </div>
  );
};

export default PasswordResult;
