import { useState } from 'react';

import { inserir } from '../api/usuarioApi';


import axios from 'axios';
import './index.scss';

export default function Escola() {
  
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [chamada, setChamada] = useState(0);
  const [turma, setTurma] = useState('');

 async function adicionar() {
    try {
      const r = await inserir(nome, chamada, turma, curso);
      
      alert('Filme cadastrado com sucesso');
    } catch(err) {
      alert(err.message);
    }
  }

  return (
    <div className="pagina-escola">

      

        <div className='devschool'>

            <div className='imagem'>
              <img src='/assets/images/Logo.png' />
            </div>

            <div className='fxpreta'></div>

            <div className='ger'>
              <h1>Gerenciamento</h1>
              <i className='fa fa-chevron-down' />
            </div>

            <div className='h1-alunos'>
              <h1>Alunos</h1>
            </div>

        </div>

      <div className='todos'>

        <div className='pt2'>

          <div className='cabecalho'>
            <img src='/assets/images/perfil.jpg' />
            <a>Olá, Kauan Matias</a>

            
            <div className='pt2-2'>

              <div className='quadrado'>
                <img src='/assets/images/refresh2.svg' />
              </div>

              <div className='quadrado2'>
              <img src='/assets/images/log-out.svg' />
              </div>

            </div>
          </div>
        </div>

          <div className='nvaluno'>


            <div className='al'>
              <a></a>
              <label>Novo Aluno</label>
            </div>

            <div className='nc'>
              <label>Nome: </label>
              <input type='text' placeholder='Kauan' value={nome} onChange={e => setNome(e.target.value)} />
              <label className='curso'>Curso:</label>
              <input type='text' placeholder='Informática ' value={curso} onChange={e => setCurso(e.target.value)} />
            </div>

            <div className='ct'>
            <label>Chamada: </label>
            <input type='text' value={chamada} onChange={e => setChamada(e.target.value)} />
            <label className='curso'>Turma:</label>
            <input type='text' placeholder=' D' value={turma} onChange={e => setTurma(e.target.value)} />
        
            <button onClick={adicionar}> Cadastar </button>
            </div>


          </div>

          <div className='malunos'>

          </div>
      </div>
    </div>
  );
}