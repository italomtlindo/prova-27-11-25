const express = require('express');
const cors = require('cors');

const alunoRoutes = require("./src/routes/alunos.routes");
const inscricaoRoutes = require("./src/routes/inscricao.routes");
const oficinasRoutes = require("./src/routes/oficinas.routes");

const app = express();


app.use(express.json());
app.use(cors());

app.use(alunoRoutes);
app.use(inscricaoRoutes);
app.use(oficinasRoutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});