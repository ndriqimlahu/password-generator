import classes from "./Header.module.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className={classes["main-header"]}>
      <a href="/">Password Generator</a>
      <Navigation />
    </header>
  );
};

export default Header;
