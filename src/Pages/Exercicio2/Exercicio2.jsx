import React from "react";

// Componentes
import BarraSuperior from "../../Components/BarraSuperior/BarraSuperior";

// Estilos
import styles from "./Exercicio2.module.css";

const Exercicio2 = () => {
  const [precoGasolina, setPrecoGasolina] = React.useState("");
  const [litrosGasolina, setLitrosGasolina] = React.useState("");
  const [mensagemErro, setMensagemErro] = React.useState({
    inputPreco: "",
    inputGasolina: "",
    precoValido: false,
    litroValido: false,
  });
  const [respostaQuestao, setRespostaQuestao] = React.useState("");

  const onChangePreco = (event) => {
    const newValue = event.target.value;

    setPrecoGasolina(newValue);
  };

  const onChangeLitro = (event) => {
    const newValue = event.target.value;

    setLitrosGasolina(newValue);
  };

  const verificarDados = () => {
    const precoFormatado = +precoGasolina.replace(/,/g, ".");
    const litroFormatado = +litrosGasolina.replace(/,/g, ".");

    if (precoFormatado > 0) {
      setMensagemErro((prevState) => ({
        ...prevState,
        inputPreco: "",
        precoValido: true,
      }));
    } else {
      setMensagemErro((prevState) => ({
        ...prevState,
        inputPreco: "Informe um preço válido",
      }));
    }

    if (litroFormatado > 0) {
      setMensagemErro((prevState) => ({
        ...prevState,
        inputGasolina: "",
        litroValido: true,
      }));
    } else {
      setMensagemErro((prevState) => ({
        ...prevState,
        inputGasolina: "Informe um valor válido",
      }));
    }

    if (mensagemErro.precoValido && mensagemErro.litroValido) {
      const resposta = parseFloat(precoFormatado * litroFormatado);
      console.log("teste: ", resposta);
      setRespostaQuestao(resposta.toFixed(2));
    }
  };

  return (
    <div className={styles.container}>
      <BarraSuperior />

      <section aria-label="Exercício 2" className="centralizar">
        <div className="containerExercicio">
          <div className="cardExercicio">
            <p className="enunciadoExercicio">
              Um motorista deseja colocar no seu tanque X reais de gasolina.
              Escreva um algoritmo para ler o preço do litro da gasolina e o
              valor do pagamento, e exibir quantos litros ele conseguiu colocar
              no tanque.
            </p>
          </div>

          <div className="resolucaoExercicio">
            <div>
              {mensagemErro.inputPreco !== "" ? (
                <>
                  <label>Preço</label>
                  <p className={styles.dicaErro}>{mensagemErro.inputPreco}</p>
                </>
              ) : (
                <>
                  <label>Preço</label>
                </>
              )}
              <input
                type="text"
                id="valores"
                name="valores"
                placeholder="Exemplo: 4,70"
                value={precoGasolina}
                onChange={onChangePreco}
                className={
                  mensagemErro.inputPreco !== "" ? styles.inputErro : null
                }
              />
            </div>
            <br /> <br />
            <div>
              {mensagemErro.inputGasolina !== "" ? (
                <>
                  <label>Litros</label>
                  <p className={styles.dicaErro}>
                    {mensagemErro.inputGasolina}
                  </p>
                </>
              ) : (
                <>
                  <label>Litros</label>
                </>
              )}
              <input
                type="text"
                id="valores"
                name="valores"
                placeholder="Exemplo: 5"
                value={litrosGasolina}
                onChange={onChangeLitro}
                className={
                  mensagemErro.inputGasolina !== "" ? styles.inputErro : null
                }
              />
            </div>
            <div className="botaoPadrao" onClick={() => verificarDados()}>
              <p className="TextoBotaoPadrao">verificar</p>
            </div>
            <p className={styles.resposta}>
              Resposta: {respostaQuestao ? `R$ ${respostaQuestao}` : ""}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exercicio2;
