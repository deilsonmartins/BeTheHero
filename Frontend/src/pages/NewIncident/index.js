import React, {useState} from 'react';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

import { Link } from 'react-router-dom';

import {toast} from 'react-toastify';

import {Form, Input, Textarea} from '@rocketseat/unform';

import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import history from '../../services/history';;

export default function Register() {

  const ongId = localStorage.getItem('ongId');

  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [value, setvalue] = useState('');

  async function handleNewIncident(e) {

    const data = {
      title,
      description,
      value
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId 
        }
      })

      history.push('/profile');

    } catch(err) {
      toast.error('Erro ao cadastrar caso, tente novamente.')
    }
  }

  return (
    <Container>
        <Content>
            <section>
                <img src={logoImg} alt="Be The Hero"/>

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
            
                <Link to="/profile"><FiArrowLeft size={16} color="#E02041"/>Voltar para home</Link>
            </section>

            <Form onSubmit={handleNewIncident}>
                <Input 
                  name="name" 
                  placeholder="Título do caso"
                  value={title}
                  onChange={e => setTitle(e.target.value)}/>
                  
                <Textarea 
                  name="descricao" 
                  placeholder="Descrição"
                  value={description}
                  onChange={e => setdescription(e.target.value)}/>

                <Input 
                  name="value" 
                  placeholder="Valor em reais"
                  value={value}
                  onChange={e => setvalue(e.target.value)}/>

                <button type="submit">Cadastrar</button>
            </Form>
        </Content>
    </Container>
  );
}
