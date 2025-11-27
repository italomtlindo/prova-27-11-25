const mysql = require("mysql2/promise.js");

const connection = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        database: "escolaextra"
});

module.exports = connection;

/*
host -> endereço do banco de dados
user -> Usuario do banco de dados 
password -> Senha do usuario
database -> base de dados 
*/