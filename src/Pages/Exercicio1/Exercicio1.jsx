import React, { useEffect } from "react";

// Componentes
import BarraSuperior from "../../Components/BarraSuperior/BarraSuperior";

// Estilos
import styles from "./Exercicio1.module.css";

const Exercicio1 = () => {
  const [valores, setValores] = React.useState([]);
  const [arrayValores, setArrayValores] = React.useState([]);
  const [arrayValoresNegativos, setArrayValoresNegativos] = React.useState([]);
  const [mensagemErro, setMensagemErro] = React.useState("");

  const onChange = (event) => {
    const newValue = event.target.value;

    // Verificar se há caracteres do alfabeto (A-Z)
    const regex = /[A-Za-z]/;
    const regex2 = /[^\w,-]/;

    if (regex.test(newValue) || regex2.test(newValue)) {
    } else {
      setValores(newValue);
    }
  };

  const verificarDados = () => {
    if (valores.length <= 4) {
      setMensagemErro("Insira 5 números separados por vírgula.");
    } else {
      const numeros = valores.toString().split(",").map(Number);
      setArrayValores(numeros);
      setMensagemErro("");
    }
  };

  useEffect(() => {
    const valoresNegativos = arrayValores.filter((item) => item < 0);
    setArrayValoresNegativos(valoresNegativos);
  }, [arrayValores]);

  return (
    <div className={styles.container}>
      <BarraSuperior />

      <section aria-label="Exercício 1" className="centralizar">
        <div className="containerExercicio">
          <div className="cardExercicio">
            <p className="enunciadoExercicio">
              Escrever um algoritmo que lê 5 valores para a, um de cada vez, e
              conta quantos destes valores são negativos, escrevendo na tela
              esta informação.
            </p>
          </div>

          <div className="resolucaoExercicio">
            <div>
              {mensagemErro !== "" ? (
                <>
                  <label>Valores</label>
                  <p className={styles.dicaErro}>{mensagemErro}</p>
                </>
              ) : (
                <>
                  <label>Valores</label>
                  <p className={styles.dica}>
                    Use valores separados por vírgula
                  </p>
                </>
              )}
              <input
                type="text"
                id="valores"
                name="valores"
                placeholder="Exemplo: 1, 2, 3, 4, 5"
                value={valores}
                onChange={onChange}
                className={mensagemErro !== "" ? styles.inputErro : null}
              />
            </div>

            <div className="botaoPadrao" onClick={() => verificarDados()}>
              <p className="TextoBotaoPadrao">verificar</p>
            </div>

            <p className={styles.resposta}>
              Resposta:{" "}
              <span>
                {arrayValoresNegativos.length > 0
                  ? arrayValoresNegativos.map((item, index, array) => {
                      const isLastItem = index === array.length - 1;
                      const separator = isLastItem ? "." : ",";
                      return `${item}${separator}`;
                    })
                  : ""}
              </span>
            </p>
            <p>Total de valores negativos: {arrayValoresNegativos.length}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exercicio1;
