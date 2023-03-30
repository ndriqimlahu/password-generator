import { useState, useEffect } from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>
        &copy; {currentYear} Password Generator. All rights reserved.
      </div>
      <div className={classes.credits}>
        Powered by{" "}
        <a href="https://ndriqimlahu.ml" title="Ndriçim Lahu's website" alt="Author Website" rel="noopener noreferrer">
          <strong>Ndriçim Lahu</strong>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
