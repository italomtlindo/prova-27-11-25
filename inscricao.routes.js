const express = require("express");

const inscricaosControllers = require("../controllers/inscricao.controllers");

const inscricaosRoutes = express.Router();

inscricaosRoutes.post("/inscricao/", inscricaosControllers.cadastrarinscricao);
inscricaosRoutes.get("/inscricao/listar/", inscricaosControllers.listarinscricao); 
inscricaosRoutes.put("/inscricao/atualizar/", inscricaosControllers.atualizarinscricao);
inscricaosRoutes.delete("/inscricao/excluir/:id", inscricaosControllers.excluirinscricao);
inscricaosRoutes.get("/incricao/ttlporoficina/", inscricaosControllers.Totaldeinscriçõesporoficina);
inscricaosRoutes.get("/incricao/porcategoria/", inscricaosControllers.Totaldeinscriçõesporcategoria);

module.exports = inscricaosRoutes;