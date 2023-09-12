import { Router } from "express";
import { listarAlunos, inserir } from '../repository/AlunoRepository.js';

let endpoints = Router();

endpoints.get('/aluno/listar', async (req,resp) => {
let dados = await listarAlunos();
resp.send(dados);
});

endpoints.post('/aluno', async (req,resp) => {
    let aluno = req.body;

    let dados = await inserir(aluno);
    resp.send(dados)
})

export default endpoints;