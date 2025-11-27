const db = require('../data/connection');

const cadastrarinscricao = async (req, res) => {
    const { data_inscricao, id_aluno, id_oficina } = req.body;

    if (!data_inscricao || !id_aluno || !id_oficina) {
        return res.status(400).json({
            erro: "Preencha todos os campos:"
        });
    }

    const novoinscricao = await db.query('INSERT INTO inscricoes VALUES (DEFAULT, ?, ?, ?)', [data_inscricao, id_aluno, id_oficina]);
    const inscricao = {
        id_inscricao: novoinscricao[0].insertId,
        data_inscricao: data_inscricao,
        id_aluno: id_aluno,
        id_oficina: id_oficina

    };
    res.status(201).json(inscricao).end();
};

const listarinscricao = async (req, res) => {
    try {
        const resultado = await db.query("SELECT * FROM inscricao");
        res.status(200).json(resultado[0]).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const atualizarinscricao = async (req, res) => {
    const { id_inscricao, data_inscricao, id_aluno, id_oficina } = req.body;

    try {
        const resultado = await db.query("UPDATE inscricoes SET data_inscricao = ?, id_aluno = ?, id_oficina = ? WHERE id_inscricao = ?", [id_inscricao, data_inscricao, id_aluno, id_oficina]);

        const novoinscricao = {
            id_inscricao: resultado[0].insertId,
            data_inscricao: data_inscricao,
            id_aluno: id_aluno,
            id_oficina: id_oficina
        };

        res.status(201).json(novoinscricao).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const excluirinscricao = async (req, res) => {
    const { id_inscricao } = req.params;
    try {
        await db.query("DELETE FROM inscricoes WHERE id_inscricao = ?", [id_inscricao]);
        res.status(200).json({ msg: "inscricao sumido com sucesso" }).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const Totaldeinscriçõesporoficina = async (req, res) => {
    try {
        const resultado = await db.query('SELECT oficinas.nome, COUNT(*) AS total FROM oficinas JOIN inscricoes ON oficinas.id_oficina = inscricoes.id_oficina GROUP BY oficinas.nome');
        res.status(200).json(resultado[0]).end();
    } catch (error) {
        res.status(500).json(error).end();
    }

};

const Totaldeinscriçõesporcategoria = async (req, res) => {
    try {
        const resultado = await db.query('SELECT categoria, COUNT(*) AS total FROM oficinas JOIN inscricoes ON oficinas.id_oficina = inscricoes.id_oficina GROUP BY categoria');
        res.status(200).json(resultado[0]).end();
    } catch (error) {
        res.status(500).json(error).end();
    }

};

module.exports = {
    cadastrarinscricao,
    listarinscricao,
    atualizarinscricao,
    excluirinscricao,
    Totaldeinscriçõesporoficina,
    Totaldeinscriçõesporcategoria,
};