import React from "react";

// Componentes
import BarraSuperior from "../../Components/BarraSuperior/BarraSuperior";

// Estilos
import styles from "./Exercicio6.module.css";

const Exercicio6 = () => {
  const [valor, setValor] = React.useState("");
  const [valorFatorial, setValorFatorial] = React.useState("");
  const [mensagemErro, setMensagemErro] = React.useState(null);

  const realizarFatorial = () => {
    const numero = parseInt(valor);

    if (isNaN(numero) || numero < 0) {
      setValorFatorial(null);
      setMensagemErro("Valor inválido. Insira um número inteiro não negativo.");
      return;
    }

    if (numero === 0) {
      setValorFatorial(1);
    } else {
      let fatorial = 1;
      for (let i = 1; i <= numero; i++) {
        fatorial *= i;
      }
      setValorFatorial(fatorial);
    }

    setMensagemErro(null);
  };

  const onChange = (event) => {
    const newValue = event.target.value;
    setValor(newValue);
  };

  return (
    <div className={styles.container}>
      <BarraSuperior />

      <section aria-label="Exercício 1" className="centralizar">
        <div className="containerExercicio">
          <div className="cardExercicio">
            <p className="enunciadoExercicio">
              Escrever um algoritmo que lê um número e calcula e escreve o seu
              fatorial.
            </p>
          </div>

          <div className="resolucaoExercicio">
            <label>Valor</label>
            <input
              type="text"
              id="valores"
              name="valores"
              placeholder="Exemplo: 10"
              value={valor}
              onChange={onChange}
              className={mensagemErro ? styles.inputErro : null}
            />

            <div className="botaoPadrao" onClick={() => realizarFatorial()}>
              <p className="TextoBotaoPadrao">continuar</p>
            </div>

            <p className={styles.resposta}>
              Resposta: <span>{valorFatorial ? valorFatorial : null}</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exercicio6;
