import conexao from "./connection.js";

export async function listarAlunos() {
    let sql = 'select * from tb_alunos';

    let resp = await conexao.query(sql);
    let dados = resp[0];

    return dados;
};

export async function inserir(aluno) {
    let sql = 'insert into tb_alunos(nm_aluno, nr_chamada, ds_turma, ds_curso) values (?, ?, ? , ?)';

    let resp = await conexao.query(sql, [aluno.nome, aluno.chamada, aluno.turma, aluno.curso]);
    let dados = resp[0]

    aluno.id = dados.insertId;
    return aluno
};

