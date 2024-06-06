var express = require("express");
var router = express.Router();
const db = require("../database/config");

var dashboardController = require("../controllers/dashboardController.js");

router.get("/exibirMaiorPontuacao", function (req, res) {
  dashboardController.exibirMaiorPontuacao(req, res);
});

router.get("/enviarJogosCategoria", function (req, res) {
  dashboardController.enviarJogosCategoria(req, res);
});

router.get("/qtdPessoasCategoria", function (req, res) {
    dashboardController.qtdPessoasCategoria(req, res);
})

router.get("/usuariosCategoria", function (req, res) {
  dashboardController.usuariosCategoria(req, res);
})

module.exports = router;
