const db = require('../data/connection');

const cadastraraluno = async (req, res) => {
    const { nome, turma } = req.body;


        if (!data_inscricao || !id_aluno || !id_oficina) {
            return res.status(400).json({
                erro: "Preencha todos os campos:"
            });
        }

    const novoaluno = await db.query('INSERT INTO alunos VALUES (DEFAULT, ?, ?)', [ nome, turma]);
    const aluno = {
        id_aluno: novoaluno[0].insertId,
        nome: nome,
        turma: turma
        
    };
    res.status(201).json(aluno).end();
};


const listaraluno = async (req, res) => {
    try {
        const resultado = await db.query("SELECT * FROM alunos");
        res.status(200).json(resultado[0]).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const atualizaraluno = async (req, res) => {
    const { id_aluno, nome, turma} = req.body;

    try {

        const resultado = await db.query("UPDATE alunos SET nome = ?, turma = ? WHERE id_aluno = ?", [nome, turma, id_aluno]);

        const novoaluno = {
            id_aluno: resultado[0].insertdId,
            nome: nome,
            turma: turma,
        };

        res.status(201).json(novoaluno).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const excluiraluno = async (req, res) => {
    const { id } = req.params;
    try {
         await db.query("DELETE FROM alunos WHERE id_aluno = ?", [id]);
        res.status(200).json({ msg: "aluno sumido com sucesso" }).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

module.exports = {
    cadastraraluno,
    listaraluno,
    atualizaraluno,
    excluiraluno,
};
