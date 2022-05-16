const query = require("../infraestrutura/database/queries");

class Usuario {
  listar() {
    const sql = "SELECT * FROM Usuarios";

    return query(sql);
  }

  adicionar(usuario) {
    const sql = "INSERT INTO Usuarios SET ?";

    return query(sql, usuario);
  }

  buscaPorId(id) {
    const sql = "SELECT * FROM Usuarios WHERE id = ?";

    return query(sql, id);
  }

  alterar(id, valores) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";

    return query(sql, [valores, id]);
  }

  buscaPorNome(nome) {
    const sql = "SELECT * FROM Usuarios WHERE nome LIKE ?";

    return query(sql, `%${nome}%`);
  }

  excluir(id) {
    const sql = "DELETE FROM Usuarios WHERE id = ?";

    return query(sql, id);
  }

  validarNomeNãoUtilizado(nome) {
    const sql = "SELECT COUNT(*) FROM Usuarios WHERE nome = ?";

    return query(sql, nome);
  }
}

module.exports = new Usuario();
