const query = require("../infraestrutura/database/queries");

class Usuario {
  constructor() {
    this.sqlBusca = "SELECT id, nome, urlFotoPerfil FROM Usuarios";
    this.sqlBuscarPorNome = `${this.sqlBusca} WHERE nome`;
    this.sqlBuscarPorId = `${this.sqlBusca} WHERE id =`;
  }

  listar() {
    const sql = this.sqlBusca; //"SELECT * FROM Usuarios";

    return query(sql);
  }

  adicionar(usuario) {
    const sql = "INSERT INTO Usuarios SET ?";

    return query(sql, usuario);
  }

  buscarPorId(id) {
    // const sql = "SELECT * FROM Usuarios WHERE id = ?";
    const sql = `${this.sqlBuscarPorId} ?`;

    return query(sql, id).then((data) => data[0]);
  }

  alterar(id, valores) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";

    return query(sql, [valores, id]);
  }

  buscarPorNome(nome) {
    const sql = `${this.sqlBuscarPorNome} LIKE ?`;

    return query(sql, `%${nome}%`);
  }

  excluir(id) {
    const sql = "DELETE FROM Usuarios WHERE id = ?";

    return query(sql, id);
  }

  isNomeUsuarioUtilizado(nome) {
    const sql = "SELECT COUNT(*) FROM Usuarios WHERE nome = ?";

    return query(sql, `'${nome}'`);
  }

  buscarDadosPessoaisDoUsuario(id) {
    const sql =
      "SELECT nomeCompleto, dataNascimento, rg, cpf FROM Usuarios WHERE id = ?";

    return query(sql, id);
  }

  /*
  |Ver com Tiago ou com o mentor
  |Como atualizar essa tabela
  */
  atualizarDadosPessoaisDoUsuario(id, valores) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";

    return query(sql, [valores, id]);
  }

  buscarContatosDoUsuario(id) {
    const sql = "SELECT telefone, celular, email FROM Usuarios WHERE id = ?";

    return query(sql, id);
  }

  atualizarContatosDoUsuario(id, valores) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";

    return query(sql, [valores, id]);
  }

  atualizarSenhaDoUsuario(id, senha) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";

    return query(sql, [senha, id]);
  }

  buscarEnderecoDoUsuario(id){
    const sql = "SELECT cep, endereco, numero, complemento, bairro";

    return query(sql, id);
  }

  atualizarEnderecoDoUsuario(id, valores){
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";

    return query(sql, [valores, id]);
  }
}

module.exports = new Usuario();
