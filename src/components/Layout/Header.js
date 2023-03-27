import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes["main-header"]}>
      <a href="/">{props.applicationName}</a>
    </header>
  );
};

export default Header;
