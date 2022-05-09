const Eventos = require("../models/eventos");

module.exports = (app) => {
  app.get("/eventos", (req, res, next) => {
    Eventos.listar()
      .then((resultados) => res.json(resultados))
      .catch((erros) => next(erros));
  });

  app.get("/eventos/:id", (req, res, next) => {
    const id = req.params.id;
    Eventos.buscaPorId(id)
      .then((resultado) => res.json(resultado))
      .catch((erros) => next(erros));
  });
};
