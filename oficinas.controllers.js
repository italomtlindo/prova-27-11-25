const db = require('../data/connection');

const cadastraroficinas = async (req, res) => {
    const {  nome, categoria, vagas } = req.body;

    
        if (!nome || !categoria ) {
            return res.status(400).json({
                erro: "Preencha todos os campos:"
            });
        }

        if (!vagas || vagas < 1) {
    return res.status(400).json({ error: "A oficina deve ter no minimo 1 vaga" });
}
    
    const novooficina = await db.query('INSERT INTO oficinas VALUES (DEFAULT, ?, ?, ?)', [ nome, categoria, vagas]);
    const oficina = {
        id_oficina: novooficina[0].insertId,
        nome: nome,
        categoria: categoria,
        vagas: vagas

    };
    res.status(201).json(oficina).end();
};

const listaroficinas = async (req, res) => {
    try {
        const resultado = await db.query("SELECT * FROM oficinas");
        res.status(200).json(resultado[0]).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const atualizaroficinas = async (req, res) => {
    const {  id_oficina, nome, categoria, vagas } = req.body;

    try {

        const resultado = await db.query("UPDATE oficinas SET nome = ?, categoria = ?, vagas = ? WHERE id_oficina = ?", [ nome, categoria, vagas, id_oficina]);

        const oficinaCadastrada = {
            id_oficina: resultado[0].insertId,
            nome: nome,
            categoria: categoria,
            vagas: vagas
        }


        res.status(201).json(oficinaCadastrada).end();
    } catch (error) {
        console.log(error);
        res.status(500).json(error).end();
    }
};

const excluiroficinas = async (req, res) => {
    const { id_oficina } = req.params;
    try {
         await db.query("DELETE FROM oficinas WHERE id_oficina = ?", [id_oficina]);
        res.status(200).json({ msg: "oficinas sumido com sucesso" }).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

module.exports = {
    cadastraroficinas,
    listaroficinas,
    atualizaroficinas,
    excluiroficinas,
};