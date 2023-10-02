import React from "react";

// Estilização
import styles from "./BarraSuperior.module.css";

// Componentes
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const BarraSuperior = () => {
  return (
    <header className={styles.container} aria-label="cabeçalho da página">
      <Logo />
      <Navbar />
    </header>
  );
};

export default BarraSuperior;
