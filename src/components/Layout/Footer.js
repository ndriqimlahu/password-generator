import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>
        &copy; 2023 {props.applicationName}. All rights reserved.
      </div>
      <div className={classes.credits}>
        Powered by{" "}
        <a href="https://ndriqimlahu.ml" alt="Ndriçim Lahu">
          <strong>{props.author}</strong>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
