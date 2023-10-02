import React, { useState } from "react";

// Componentes
import BarraSuperior from "../../Components/BarraSuperior/BarraSuperior";

// Estilos
import styles from "./Exercicio7.module.css";

const Exercicio7 = () => {
  const [valores, setValores] = useState([]);
  const [novoValor, setNovoValor] = useState("");
  const [media, setMedia] = useState(null);

  const adicionarValor = () => {
    if (novoValor !== "") {
      const novoValorInteiro = parseInt(novoValor);
      if (!isNaN(novoValorInteiro) && novoValorInteiro >= 0) {
        setValores([...valores, novoValorInteiro]);
        setNovoValor("");
      }
    }
  };

  const calcularMedia = () => {
    if (valores.length === 0) {
      alert("Insira pelo menos um valor antes de calcular a média.");
      return;
    }

    const soma = valores.reduce((total, valor) => total + valor, 0);
    const mediaCalculada = soma / valores.length;
    setMedia(mediaCalculada.toFixed(2));
  };

  return (
    <div className={styles.container}>
      <BarraSuperior />

      <section aria-label="Exercício 6" className="centralizar">
        <div className="containerExercicio">
          <div className="cardExercicio">
            <p className="enunciadoExercicio">
              Escrever um algoritmo que lê um número não determinado de valores
              N, todos inteiros e positivos, um de cada vez, e calcula e escreve
              a média aritmética dos valores lidos.
            </p>
          </div>

          <div className="resolucaoExercicio">
            <div>
              <label>Novo Valor</label>
              <input
                type="number"
                placeholder="Insira um valor inteiro e positivo"
                value={novoValor}
                onChange={(e) => setNovoValor(e.target.value)}
              />
              <br /> <br />
              <div className="botaoPadrao" onClick={() => adicionarValor()}>
                <p className="TextoBotaoPadrao">Adicionar valor</p>
              </div>
              <div className="botaoPadrao" onClick={() => calcularMedia()}>
                <p className="TextoBotaoPadrao">Calcular média</p>
              </div>
            </div>

            {valores.length > 0 && (
              <div className={styles.valoresInseridos}>
                <h3>Números Inseridos:</h3>
                <ul>
                  {valores.map((valor, index) => (
                    <li key={index}>{valor}</li>
                  ))}
                </ul>
              </div>
            )}

            {media !== null && (
              <p className={styles.resposta}>
                Média Aritmética: <span>{media}</span>
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exercicio7;
