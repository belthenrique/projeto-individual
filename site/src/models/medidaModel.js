var database = require("../database/config");

function enviarVotos(personagem_fav, editora_fav, id_usuario_logado){
    
 var voto_usuario =  `insert into voto
 values (null, ${personagem_fav}, ${editora_fav}, ${id_usuario_logado})`;
 
 return database.executar(voto_usuario);

}


function selecionarVotos(opcao){

    var selecionar_votos = `select count(personagem) as quantidade_votos from voto where personagem = ${opcao};`;

    return database.executar(selecionar_votos);


}

function selecionarVotosEditora(opcao){

    var selecionar_votos_editora = `select count(editora) as quantidade_votos_editora from voto where editora = ${opcao};`;

    return database.executar(selecionar_votos_editora);


}

module.exports = {
    enviarVotos,
    selecionarVotos,
    selecionarVotosEditora
}
