const express = require("express");

const alunosControllers = require("../controllers/alunos.controllers");

const alunosRoutes = express.Router();

alunosRoutes.post("/aluno", alunosControllers.cadastraraluno);
alunosRoutes.get("/aluno/listar/", alunosControllers.listaraluno); 
alunosRoutes.put("/aluno/atualizar/", alunosControllers.atualizaraluno);
alunosRoutes.delete("/aluno/excluir/:id", alunosControllers.excluiraluno);

module.exports = alunosRoutes;