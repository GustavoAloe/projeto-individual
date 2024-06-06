var dashboardModel = require("../models/dashboardModel.js");

function exibirMaiorPontuacao(req, res) {
  const idUsuario = req.query.id;

  dashboardModel
    .exibirMaiorPontuacao(idUsuario)
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

function usuariosCategoria(req, res) {
  dashboardModel.usuariosCategoria()
      .then(
          function (resultado) {
              res.json(resultado);
          }
      )
      .catch(
          function (erro) {
              console.log(erro);
              console.log("Houve um erro nos dados da categoria: ", erro.sqlMessage);
              res.status(500).json(erro.sqlMessage);
          }
      );
}

module.exports = {
  exibirMaiorPontuacao,
  enviarJogosCategoria,
  usuariosCategoria
};
