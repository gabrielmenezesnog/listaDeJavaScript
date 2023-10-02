import React from "react";

// Components
import BarraSuperior from "../../Components/BarraSuperior/BarraSuperior";

// Estilos
import styles from "./Homepage.module.css";
import ReactSvg from "../../Components/ReactSvg/ReactSvg";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <BarraSuperior />

      <div className={styles.apresentacao}>
        <div className={styles.containerLogo}>
          <div className={styles.rotate}>
            <ReactSvg />
          </div>
        </div>
        <p className={styles.textoApresentacao}>
          Olá professora Cláudia, tudo bem? Só pra avisar que eu fiz todos esses
          exercícios usando React-JS. A lógica para o Javascript é a mesma, o
          que muda é a reatividade e a forma da qual os elementos são
          renderizados no DOM. Nesse projetinho apliquei conhecimento de rotas
          de navegação e hooks do React.
          <p>
            Fiz isso para ver se te impressiono e consigo combinar com você
            alguma forma de ser liberado da sua matéria nesse semestre 😳
          </p>
          <p>
            P.s: Eu sou o Gabriel de Menezes que te mandou um email falando
            sobre isso esses dias
          </p>
        </p>
      </div>
    </div>
  );
};

export default Homepage;
