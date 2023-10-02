import React, { useState } from "react";

// Componentes
import BarraSuperior from "../../Components/BarraSuperior/BarraSuperior";

// Estilos
import styles from "./Exercicio3.module.css";

const Exercicio3 = () => {
  const [alunos, setAlunos] = useState([]);
  const [numeroAluno, setNumeroAluno] = useState("");
  const [alturaAluno, setAlturaAluno] = useState("");
  const [alunoMaisAlto, setAlunoMaisAlto] = useState({});
  const [alunoMaisBaixo, setAlunoMaisBaixo] = useState({});

  const adicionarAluno = () => {
    if (numeroAluno && alturaAluno) {
      const novoAluno = {
        numero: parseInt(numeroAluno),
        altura: parseInt(alturaAluno),
      };
      setAlunos([...alunos, novoAluno]);
      setNumeroAluno("");
      setAlturaAluno("");
    }
  };

  const encontrarAlunosMaisAltoEBaixo = () => {
    if (alunos.length === 0) {
      alert(
        "Adicione pelo menos um aluno antes de encontrar o mais alto e o mais baixo."
      );
      return;
    }

    const alunoAlto = alunos.reduce((max, aluno) =>
      aluno.altura > max.altura ? aluno : max
    );

    const alunoBaixo = alunos.reduce((min, aluno) =>
      aluno.altura < min.altura ? aluno : min
    );

    setAlunoMaisAlto(alunoAlto);
    setAlunoMaisBaixo(alunoBaixo);
  };

  return (
    <div className={styles.container}>
      <BarraSuperior />

      <section aria-label="Exercício 1" className="centralizar">
        <div className="containerExercicio">
          <div className="cardExercicio">
            <p className="enunciadoExercicio">
              Escrever um algoritmo que lê 5 conjuntos de 2 valores, o primeiro
              representando o número de um aluno e o segundo representando a sua
              altura em centímetros. Encontrar o aluno mais alto e o mais baixo
              e escrever seus números, suas alturas e uma mensagem dizendo se é
              o mais alto ou o mais baixo.
            </p>
          </div>

          <div className="resolucaoExercicio">
            <div>
              <label>Número do aluno</label>
              <input
                type="number"
                placeholder="Número do aluno"
                value={numeroAluno}
                onChange={(e) => setNumeroAluno(e.target.value)}
              />
              <br />
              <br />
              <label>Altura</label>
              <input
                type="number"
                placeholder="Altura (cm)"
                value={alturaAluno}
                onChange={(e) => setAlturaAluno(e.target.value)}
              />

              <div className="botaoPadrao" onClick={() => adicionarAluno()}>
                <p className="TextoBotaoPadrao">Adicionar aluno</p>
              </div>

              <div
                className="botaoPadrao"
                onClick={() => encontrarAlunosMaisAltoEBaixo()}
              >
                <p className="TextoBotaoPadrao">Continuar</p>
              </div>
            </div>

            <div>
              <h3>Aluno Mais Alto:</h3>
              {alunoMaisAlto.numero && (
                <p>
                  Número: {alunoMaisAlto.numero}, Altura: {alunoMaisAlto.altura}{" "}
                  cm
                </p>
              )}
            </div>
            <div>
              <h3>Aluno Mais Baixo:</h3>
              {alunoMaisBaixo.numero && (
                <p>
                  Número: {alunoMaisBaixo.numero}, Altura:{" "}
                  {alunoMaisBaixo.altura} cm
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exercicio3;
