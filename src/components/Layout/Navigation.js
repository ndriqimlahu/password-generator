import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
