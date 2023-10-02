import React, { useState } from "react";

// Componentes
import BarraSuperior from "../../Components/BarraSuperior/BarraSuperior";

// Estilos
import styles from "./Exercicio8.module.css";

const Exercicio8 = () => {
  const [numero, setNumero] = useState("");
  const [tabuada, setTabuada] = useState([]);

  const calcularTabuada = () => {
    if (numero !== "") {
      const numeroInteiro = parseInt(numero);
      if (!isNaN(numeroInteiro)) {
        const tabuadaCalculada = [];
        for (let i = 1; i <= 10; i++) {
          tabuadaCalculada.push(
            `${numeroInteiro} x ${i} = ${numeroInteiro * i}`
          );
        }
        setTabuada(tabuadaCalculada);
      }
    }
  };

  return (
    <div className={styles.container}>
      <BarraSuperior />

      <section aria-label="Exercício 7" className="centralizar">
        <div className="containerExercicio">
          <div className="cardExercicio">
            <p className="enunciadoExercicio">
              Escrever um algoritmo que lê um número e, para cada número lido,
              escreva a tabuada correspondente.
            </p>
          </div>

          <div className="resolucaoExercicio">
            <div>
              <label>Número</label>
              <input
                type="number"
                placeholder="Insira um número inteiro"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
              <br /> <br />
              <div className="botaoPadrao" onClick={() => calcularTabuada()}>
                <p className="TextoBotaoPadrao">Calcular Tabuada</p>
              </div>
            </div>

            {tabuada.length > 0 && (
              <div className={styles.tabuadaResultado}>
                <h3>Tabuada:</h3>
                <ul>
                  {tabuada.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exercicio8;
