const express = require("express");
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:4everayzer@cluster0-hqoqg.mongodb.net/semana-09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE
// req.query = acessar query params ( para filtros)
// req.params = acessar route params ( para edição, delete)
// req.body = acessar corpo da requisição ( para criação e edição)
app.use(express.json()); // informa que o body vem json
app.use(routes);

app.listen(3333);