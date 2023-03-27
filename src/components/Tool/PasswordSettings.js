import classes from "./PasswordSettings.module.css";

const PasswordSettings = (props) => {
  return (
    <div className={classes.settings}>
      <span className={classes.settings__title}>Settings</span>
      <div className={classes.toggle}>
        <input
          type="checkbox"
          id="lowercase"
          checked={props.lowercase}
          onChange={props.handleLowercase}
        />
        <label htmlFor="lowercase">Include Lowercase</label>
      </div>
      <div className={classes.toggle}>
        <input
          type="checkbox"
          id="uppercase"
          checked={props.uppercase}
          onChange={props.handleUppercase}
        />
        <label htmlFor="uppercase">Include Uppercase</label>
      </div>
      <div className={classes.toggle}>
        <input
          type="checkbox"
          id="number"
          checked={props.number}
          onChange={props.handleNumber}
        />
        <label htmlFor="number">Include Number</label>
      </div>
      <div className={classes.toggle}>
        <input
          type="checkbox"
          id="symbol"
          checked={props.symbol}
          onChange={props.handleSymbol}
        />
        <label htmlFor="symbol">Include Symbol</label>
      </div>
    </div>
  );
};

export default PasswordSettings;
