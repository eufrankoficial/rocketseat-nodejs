const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors')

// iniciando o app
const app = express();

// estou permitindo a minha aplicação enviar dados em formato json
app.use(express.json());
app.use(cors());


// iniciando conexão com o mongodb
mongoose.connect('mongodb://localhost:27017/nodeapi', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

requireDir('./src/models');

app.use('/api', require('./src/routes'));


app.listen(3001);


