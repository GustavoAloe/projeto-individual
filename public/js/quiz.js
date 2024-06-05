const startGameButton = document.querySelector(".start-quiz");
const botao_prox_questao = document.querySelector(".next-question");
const questionsContainer = document.querySelector(".questions-container");
const questionText = document.querySelector(".question");
const questionImage = document.querySelector(".imageQuestion img");
const answersContainer = document.querySelector(".answers-container");
const answers = document.querySelectorAll(".answer");

let questao_atual = 0;
let acertos = 0;

const questions = [
  {
    question: "Qual organização de eSports tem esse escudo?",
    questionImage: "../assets/logosQuiz/1.png",
    answers: [
      { text: "Rain9", correct: false },
      { text: "Cloud8", correct: false },
      { text: "Cloud9", correct: true },
      { text: "Liquid", correct: false },
    ],
  },
  {
    question: "Qual organização de eSports tem esse escudo?",
    questionImage: "../assets/logosQuiz/2.png",
    answers: [
      { text: "Phase", correct: false },
      { text: "FazeTeam", correct: false },
      { text: "FaZe", correct: true },
      { text: "Faize", correct: false },
    ],
  },
  {
    question: "Qual organização de eSports tem esse escudo?",
    questionImage: "../assets/logosQuiz/3.png",
    answers: [
      { text: "Fnatic", correct: true },
      { text: "Fnaticus", correct: false },
      { text: "Fanatic", correct: false },
      { text: "Fanaticus", correct: false },
    ],
  },
  {
    question: "Qual organização de eSports tem esse escudo?",
    questionImage: "../assets/logosQuiz/4.png",
    answers: [
      { text: "Panther", correct: false },
      { text: "Furia", correct: true },
      { text: "Tiger", correct: false },
      { text: "Fury", correct: false },
    ],
  },
  {
    question: "Qual organização de eSports tem esse escudo?",
    questionImage: "../assets/logosQuiz/5.png",
    answers: [
      { text: "G3 Esports", correct: false },
      { text: "G2 Gaming", correct: false },
      { text: "G2 Esports", correct: true },
      { text: "G2 Athletics", correct: false },
    ],
  },
  {
    question: "Qual organização de eSports tem esse escudo?",
    questionImage: "../assets/logosQuiz/6.png",
    answers: [
      { text: "Team Fluid", correct: false },
      { text: "Team Liquid", correct: true },
      { text: "Team Aqua", correct: false },
      { text: "Team Horse", correct: false },
    ],
  },
  {
    question: "Qual organização de eSports tem esse escudo?",
    questionImage: "../assets/logosQuiz/7.png",
    answers: [
      { text: "Natus Vencer", correct: false },
      { text: "Natus Win", correct: false },
      { text: "Natus Victory", correct: false },
      { text: "Natus Vincere", correct: true },
    ],
  },
  {
    question: "Qual organização de eSports tem esse escudo?",
    questionImage: "../assets/logosQuiz/8.png",
    answers: [
      { text: "Paper Rex", correct: true },
      { text: "Pepper Rex", correct: false },
      { text: "Paper Flex", correct: false },
      { text: "Papel Rex", correct: false },
    ],
  },
  {
    question: "Qual organização de eSports tem esse escudo?",
    questionImage: "../assets/logosQuiz/9.png",
    answers: [
      { text: "Team Heroes", correct: false },
      { text: "Team Heritage", correct: false },
      { text: "Team Heretics", correct: true },
      { text: "Team Heros", correct: false },
    ],
  },
  {
    question: "Qual organização de eSports tem esse escudo?",
    questionImage: "../assets/logosQuiz/10.png",
    answers: [
      { text: "Team SoloMind", correct: false },
      { text: "Team SoloMid", correct: true },
      { text: "Team SilenceMind", correct: false },
      { text: "Team SilverMid", correct: false },
    ],
  },
];

startGameButton.addEventListener("click", startGame, sumirText);
botao_prox_questao.addEventListener("click", mostrar_prox_pergunta);

function startGame() {
  startGameButton.classList.add("hide");
  questionsContainer.classList.remove("hide");
  mostrar_prox_pergunta();
}

function mostrar_prox_pergunta() {
  reiniciando();

  if (questions.length === questao_atual) {
    return finalizar_quiz();
  }

  const question = questions[questao_atual];
  questionText.textContent = question.question;

  if (question.questionImage) {
    questionImage.src = question.questionImage;
    questionImage.style.display = "block";
  } else {
    questionImage.style.display = "none";
  }

  question.answers.forEach((answer) => {
    const nova_resposta = document.createElement("button");
    nova_resposta.classList.add("button", "answer");
    nova_resposta.textContent = answer.text;

    if (answer.correct) {
      nova_resposta.dataset.correct = answer.correct;
    }
    answersContainer.appendChild(nova_resposta);
    nova_resposta.addEventListener("click", resposta_escolhida);
  });
}

function reiniciando() {
  while (answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild);
  }

  botao_prox_questao.classList.add("hide");
  questionImage.src = "";
  questionImage.style.display = "none";
}

function resposta_escolhida(event) {
  const resposta_clicada = event.target;

  if (resposta_clicada.dataset.correct) {
    acertos++;
  }

  document.querySelectorAll(".answer").forEach((button) => {
    button.disabled = true;

    if (button.dataset.correct) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });

  botao_prox_questao.classList.remove("hide");
  questao_atual++;
}

function finalizar_quiz() {
  const totalQuestions = questions.length;
  const performance = Math.floor((acertos * 10) / totalQuestions);

  let message = acertos;

  questionsContainer.innerHTML = `
    <p class="final-message">
      Você acertou ${acertos} de ${totalQuestions} questões!
      <span>Pontuação: ${message} pontos</span>
    </p>
  `;
  enviando_resultado();
}

function enviando_resultado() {
  console.log(`acertos`);
  var ss_idusuario = sessionStorage.ID_USUARIO;
  fetch("/quiz/cadastro_pontuacao", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pontuacaoServer: acertos,
      idusuarioServer: ss_idusuario,
    }),
  });
  enviarparadiv();
}

function enviarparadiv() {
  fetch("/quiz/listar_pontuacao")
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
          resposta.reverse();
          plotarGrafico(resposta);
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function plotarGrafico(resposta) {
  resultados.innerHTML += `<span id="resultados" style="font-size: 24px; display: flex; padding-top: 30px; color: white; font-weight: 800; font-family: 'Jura';">Quer ver a sua posição no ranking? Clique em - <a href="./dashboard.html" id="resultados" style="font-size: 26px; color: white; font-weight: 800; font-family: 'Jura';">Ver Ranking</a></span>`;
}
