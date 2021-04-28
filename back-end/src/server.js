const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('./cors');

const app = express();

mongoose.connect('mongodb+srv://alissonjuan:5285juan@aircnc.dxfz1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//GET, POST, PUT, DELETE

//req.query = acessar query params
//req.params = acessar route params (para edição , deletar)
// req.body = acessar corpo da requisiçao (para criação, edição)
//banco de dados depois procurar sequelize

app.use(cors());

app.use(express.json());

app.use(routes);


app.listen(3333);