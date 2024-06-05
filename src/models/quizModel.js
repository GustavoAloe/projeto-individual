var database = require("../database/config");

function listar_pontuacao() {
  var instrucao = `
    select distinct(u.nome), quiz.pontuacao from quiz join usuario as u on quiz.fkusuario = u.id order by quiz.pontuacao limit 10;
    `;
  console.log("Executando a instrução SQL pegarid: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastro_pontuacao(
  id_do_usuario_sendo_puxada,
  pontuacao_usuario_sendo_puxada
) {
  console.log(`teste`);
  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        INSERT INTO quiz (pontuacao, fkusuario) VALUES ('${pontuacao_usuario_sendo_puxada}', 
        '${id_do_usuario_sendo_puxada}');
    `;
  console.log("Executando a instrução SQL cadastrar: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listar_pontuacao,
  cadastro_pontuacao,
};
