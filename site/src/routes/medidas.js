var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/voto", function (req, res) {
    medidaController.alterarValor(req, res);
});

router.get("/voto/:personagem", function (req, res) {
    medidaController.selectValor(req, res);
});

router.get("/voto2/:editora", function (req, res) {
    medidaController.selectValorEditora(req, res);
});

module.exports = router;