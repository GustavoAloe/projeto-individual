var database = require("../database/config");

function listar() {
  console.log(
    "ACESSEI O POSTAGEM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucaoSql = `
        SELECT 
            m.id AS idMensagem,
            m.jogo,
            m.descricao,
            m.fkUsuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM mensagem m
            INNER JOIN usuario u
                ON m.fkUsuario = u.id;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
  console.log(
    "ACESSEI O POSTAGEM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()"
  );
  var instrucaoSql = `
        SELECT 
            m.id AS idMensagem,
            m.jogo,
            m.descricao,
            m.fkUsuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM mensagem m
            INNER JOIN usuario u
                ON m.fkUsuario = u.id
        WHERE a.descricao LIKE '${texto}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
  console.log(
    "ACESSEI O POSTAGEM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()"
  );
  var instrucaoSql = `
        SELECT 
            m.id AS idMensagem,
            m.titulo,
            m.descricao,
            m.fkUsuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM mensagem m
            INNER JOIN usuario u
                ON m.fkUsuario = u.id
        WHERE u.id = ${idUsuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function publicar(jogo, descricao, idUsuario) {
  console.log(
    "ACESSEI O POSTAGEM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ",
    jogo,
    descricao,
    idUsuario
  );
  var instrucaoSql = `
        INSERT INTO mensagem (jogo, descricao, fkUsuario) VALUES ('${jogo}', '${descricao}', ${idUsuario});
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function editar(novaDescricao, idMensagem) {
  console.log(
    "ACESSEI O POSTAGEM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ",
    novaDescricao,
    idMensagem
  );
  var instrucaoSql = `
        UPDATE mensagem SET descricao = '${novaDescricao}' WHERE id = ${idMensagem};
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletar(idMensagem) {
  console.log(
    "ACESSEI O POSTAGEM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():",
    idMensagem
  );
  var instrucaoSql = `
        DELETE FROM mensagem WHERE id = ${idMensagem};
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  listar,
  listarPorUsuario,
  pesquisarDescricao,
  publicar,
  editar,
  deletar,
};
