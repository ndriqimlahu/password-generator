import { useState, useEffect } from "react";

import classes from "./Footer.module.css";

const Footer = (props) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>
        &copy; {currentYear} {props.applicationName}. All rights reserved.
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
