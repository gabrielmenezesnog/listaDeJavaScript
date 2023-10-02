import React from "react";

// Componentes
import BarraSuperior from "../../Components/BarraSuperior/BarraSuperior";

// Estilos
import styles from "./Exercicio5.module.css";

const Exercicio5 = () => {
  const [valor, setValor] = React.useState(0);

  const realizarSoma = () => {
    let total = 0;
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
        total += i;
      }
    }

    setValor(total);
  };

  return (
    <div className={styles.container}>
      <BarraSuperior />

      <section aria-label="Exercício 1" className="centralizar">
        <div className="containerExercicio">
          <div className="cardExercicio">
            <p className="enunciadoExercicio">
              Escrever um algoritmo que escreve a soma dos números pares entre 0
              e 100.
            </p>
          </div>

          <div className="resolucaoExercicio">
            <div className="botaoPadrao" onClick={() => realizarSoma()}>
              <p className="TextoBotaoPadrao">continuar</p>
            </div>

            <p className={styles.resposta}>
              Resposta: <span>{valor > 0 ? valor : null}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exercicio5;
