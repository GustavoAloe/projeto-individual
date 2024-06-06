var database = require("../database/config");

function exibirMaiorPontuacao(idUsuario) {
  var instrucao = `
    select max(q.pontuacao) as maiorPontuacao
    from quiz as q
    where q.fkUsuario = ${idUsuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function enviarJogosCategoria(idUsuario) {
  var instrucao = `
    select 
        c.categoria as categoria, 
        count(jg.fkCategoria) as qtdJogos
    from
        jogosCompetitivos as jg
    inner join
        categoria as c on jg.fkCategoria = c.id
    inner join
        usuario as u on u.fkCategoria = c.id
    where
        u.id = ${idUsuario}
    group by
        c.categoria;
    `;
  console.log("Executando a instrução SQL? \n" + instrucao);
  return database.executar(instrucao);
}

function usuariosCategoria() {
  var instrucao = `
  select cat.categoria,
  count(u.fkCategoria) as qtdPessoas
  from categoria cat
  inner join usuario u on u.fkCategoria = cat.id
  group by cat.categoria, u.fkCategoria order by qtdPessoas desc;
    `;
  console.log("Executando a instrução SQL? \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  exibirMaiorPontuacao,
  enviarJogosCategoria,
  usuariosCategoria,
};
