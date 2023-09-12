import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function inserir(nome, chamada, turma, curso) {
    const resp = await api.post('/aluno', {
        nome: nome,
        chamada: chamada,
        turma: turma,
        curso: curso
      })
      return resp.data
};
