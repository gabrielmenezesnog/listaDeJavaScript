import React from "react";
import { Link } from "react-router-dom";

// Estilização
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.container}>
        <Link className={styles.navigate} to="/exercicio1">
          EX1
        </Link>
        <Link className={styles.navigate} to="/exercicio2">
          EX2
        </Link>
        <Link className={styles.navigate} to="/exercicio3">
          EX3
        </Link>
        <Link className={styles.navigate} to="/exercicio4">
          EX4
        </Link>
        <Link className={styles.navigate} to="/exercicio5">
          EX5
        </Link>
        <Link className={styles.navigate} to="/exercicio6">
          EX6
        </Link>
        <Link className={styles.navigate} to="/exercicio7">
          EX7
        </Link>
        <Link className={styles.navigate} to="/exercicio8">
          EX8
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
