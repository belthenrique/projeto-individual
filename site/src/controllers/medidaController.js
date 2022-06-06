var medidaModel = require("../models/medidaModel");

function alterarValor(req, res) {
    var personagem_fav = req.body.personagem
    var editora_fav = req.body.editora
    var id_usuario_logado = req.body.id_usuario

    medidaModel.enviarVotos(personagem_fav, editora_fav, id_usuario_logado).then(function (resultado) {
        res.json(resultado);
    }

    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );

}

function selectValor(req, res) {
    var valor = req.params.personagem

    medidaModel.selecionarVotos(valor).then(function (resultado) {
        res.json(resultado);

        }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

    }

function selectValorEditora(req, res){
    var valor_editora = req.params.editora

    medidaModel.selecionarVotosEditora(valor_editora).then(function (resultado) {
        res.json(resultado);

        }

        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

    }

module.exports = {
            alterarValor,
            selectValor,
            selectValorEditora

        }