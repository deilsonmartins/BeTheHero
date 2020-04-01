import React, {useState} from 'react';

import { Container } from './styles';

import {FiLogIn} from 'react-icons/fi';

import {toast} from 'react-toastify';

import {Form, Input} from '@rocketseat/unform';

import heroesImg from '../../assets/heroes.png';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import history from '../../services/history';

export default function Logon() {

  const [id, setId] = useState('');

  
  async function handleLogin(e) {

    try {
        const response = await api.post('session', {id})

        localStorage.setItem('ongId', id);
        localStorage.setItem('ongName', response.data.name);

        history.push('/profile')
        
    } catch (err) {
        toast.error('Falha no login, tente novamente.')
    }

  }
  return (
    <Container>
      <section>
        <img src={logoImg} alt="logo"/>

        <Form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <Input 
            name="id" 
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}/>

          <button type="submit">Entrar</button>

          <Link to="/register"><FiLogIn size={16} color="#E02041"/>Não tenho cadastro</Link>
        </Form>

      </section>
      <img src={heroesImg} alt="Heroes"/>
    </Container>
  );
}
