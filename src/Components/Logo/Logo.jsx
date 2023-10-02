import React from "react";

// Estilização
import styles from "./Logo.module.css";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className={styles.logo}>
      GM
    </Link>
  );
};

export default Logo;
