const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');

const app = express();
const server = http.Server(app);

const { setupWebsocket } = require('./websocket');

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-hktta.mongodb.net/week10?retryWrites=true&w=majority',{
 useNewUrlParser: true,
 useUnifiedTopology: true,   
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Mongo DB (Não-relacional)


//Métodos http get, post, put, delete

// Tipos de parâmetros  
// query params: request.query(Filtros, ordenação, paginação, ...),
// route params: request.params(Iedentificar um recurso na alteração, remoção),
// body: request.body(Dados para criação ou alteração de um registro)

//app.delete('/users/:id', (request, response) => {


server.listen(3333);