var dashboardModel = require("../models/dashboardModel.js");

function exibirMaiorPontuacao(req, res) {
  const idUsuario = req.query.id; // Pega o ID do usuário da URL

  dashboardModel
    .exibirMaiorPontuacao(idUsuario) // Passa o ID para o model
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Não chegou resultado algum!");
      }
    })
    .catch((erro) => {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

function enviarJogosCategoria(req, res) {
  const userId = req.query.id;

  dashboardModel
    .enviarJogosCategoria(userId)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Não chegou resultado algum!");
      }
    })
    .catch((erro) => {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

function qtdPessoasCategoria(req, res) {
    
};

module.exports = {
  exibirMaiorPontuacao,
  enviarJogosCategoria,
};
