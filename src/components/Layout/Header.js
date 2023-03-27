import classes from "./Header.module.css";
import Navigation from "./Navigation";

const Header = (props) => {
  return (
    <header className={classes["main-header"]}>
      <a href="/">{props.applicationName}</a>
      <Navigation />
    </header>
  );
};

export default Header;
