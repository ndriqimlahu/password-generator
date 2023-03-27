import classes from "./PasswordLength.module.css";

const PasswordLength = (props) => {
  return (
    <div className={classes.length} data-min="4" data-max="32">
      <div className={classes.length__title} data-length={props.length}>
        Length:&nbsp;
      </div>
      <input
        className={classes.range__slider}
        title="Slider"
        type="range"
        min="4"
        max="32"
        value={props.length}
        onChange={props.handleLength}
      />
    </div>
  );
};

export default PasswordLength;
