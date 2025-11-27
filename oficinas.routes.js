const express = require("express");

const oficinasControllers = require("../controllers/oficinas.controllers");

const oficinasRoutes = express.Router();

oficinasRoutes.post("/oficina/", oficinasControllers.cadastraroficinas);
oficinasRoutes.get("/oficina/listar/", oficinasControllers.listaroficinas); 
oficinasRoutes.put("/oficina/atualizar/", oficinasControllers.atualizaroficinas);
oficinasRoutes.delete("/oficina/excluir/:id", oficinasControllers.excluiroficinas);

module.exports = oficinasRoutes;