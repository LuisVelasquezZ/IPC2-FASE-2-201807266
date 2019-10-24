const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const usuario = require('./usuario');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'notas'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(usuario(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});