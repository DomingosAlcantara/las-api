const Usuarios = require("../models/usuarios");

module.exports = (app) => {
  //Refatoração - OK
  app.get("/usuarios", (req, res, next) => {
    Usuarios.listar()
      .then((resultados) => res.json(resultados))
      .catch((erros) => next(erros));
  });

  //Refatoração - OK
  app.post("/usuarios", (req, res, next) => {
    const usuarios = req.body;
    Usuarios.adicionar(usuarios)
      .then((usuariosAdicionado) => res.status(201).json(usuariosAdicionado))
      .catch((erros) => next(erros));
  });

  //Refatoração - OK
  app.get("/usuarios/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Usuarios.buscarPorId(id)
      .then((usuario) => (usuario ? res.json(usuario) : res.status(404).send()))
      .catch((erros) => next(erros));
  });

  //Refatoração - OK
  app.put("/usuarios/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Usuarios.alterar(id, valores)
      .then((resultado) =>
        resultado ? res.json(resultado) : res.status(404).send()
      )
      .catch((erros) => next(erros));
  });

  //Refatoração - OK
  /*
  | Verificar com Tiago como podemos checar esses metodos
  |
  */
  app.delete("/usuarios/:id", (req, res) => { 
    const id = parseInt(req.params.id);
    // Usuarios.excluir(id)
    //   .then(() => res.json({ id }))
    //   .catch((erros) => res.status(204).json(erros));
    // Usuarios.excluir(id)
    //   .then(() => res.json(id? { id } : res.status(404).end()))
    //   .catch((erros) => next(erros));
    Usuarios.excluir(id)
      .then((resultado) =>
        resultado.affectedRows !== 0
          ? res.status(204).end()
          : res.status(404).end()
      )
      .catch((erros) => res.status(500).json(erros));
  });

  //Refatoração - OK
  app.get("/usuarios/nome/:nome", (req, res, next) => {
    const nome = req.params.nome;
    Usuarios.buscarPorNome(nome)
      .then((resultado) =>
        resultado ? res.json(resultado) : res.status(404).end()
      )
      .catch((erros) => next(erros));
  });
  // app.get("/usuarios/nome/:nome", (req, res) => {
  //   const nome = req.params.nome;
  //   Usuarios.buscarPorNome(nome)
  //     .then((resultados) => res.status(200).json(resultados))
  //     .catch((erros) => res.status(400).json(erros));
  // });

  app.get("/usuarios/:id/dados-pessoais", (req, res) => {
    const id = parseInt(req.params.id);
    Usuarios.buscarDadosPessoaisDoUsuario(id)
      .then((resultado) =>
        resultado ? res.json(resultado) : res.status(404).end()
      )
      .catch((erros)  => res.status(500).json(erros));
  });

  app.put("/usuarios/:id/dados-pessoais", (req, res, next) => {
    const id = req.params.id;
    const valores = req.body;
    Usuarios.atualizarDadosPessoaisDoUsuario(id, valores)
      .then((resultado) =>
        resultado ? res.json(resultado) : res.status(404).send()
      )
      .catch((erros) => next(erros));
  });

  app.get("/usuarios/:id/contatos", (req, res, next) => {
    const id = parseInt(req.params.id);
    Usuarios.buscarContatosDoUsuario(id)
      .then((resultado) =>
        resultado ? res.json(resultado) : res.status(404).send()
      )
      .catch((erros) => next(erros));
  });

  app.put("/usuarios/:id/contatos", (req, res, next) => {
    const id = req.params.id;
    const valores = req.body;
    Usuarios.atualizarContatosDoUsuario(id, valores)
      .then((resultado) =>
        resultado ? res.status(204).json(resultado) : res.status(405).send()
      )
      .catch((erros) => next(erros));
  });

  app.put("/usuarios/:id/senha", (req, res, next) => {
    const id = req.params.id;
    const senha = req.params.senha;
    Usuarios.atualizarSenhaDoUsuario(id, senha)
      .then((resultado) =>
        resultado ? res.status(204).json(resultado) : res.status(405).send()
      )
      .catch((erros) => next(erros));
  });

  app.get("/usuarios/:id/endereco", (req, res, next) => {
    const id = parseInt(req.params.id);
    Usuarios.buscarEnderecoDoUsuario(id)
      .then((resultado) =>
        resultado ? res.json(resultado) : res.status(404).send()
      )
      .catch((erros) => next(erros));
  });

  app.put("/usuarios/:id/endereco", (req, res, next) => {
    const id = req.params.id;
    const valores = req.body;
    Usuarios.atualizarEnderecoDoUsuario(id, valores)
      .then((resultado) =>
        resultado ? res.status(204).json(resultado) : res.status(405).send()
      )
      .catch((erros) => next(erros));
  });

};
