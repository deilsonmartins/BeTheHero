import React, {useState} from 'react';

import { Container, Content } from './styles';

import {toast} from 'react-toastify';

import logoImg from '../../assets/logo.svg';

import { Link } from 'react-router-dom';

import {Form, Input} from '@rocketseat/unform';

import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import history from '../../services/history';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsaap, setWhatsaap] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');


    async function handleSubmit(e){
        
        const data = {
            name,
            email,
            whatsaap,
            city,
            uf

        }
        try {
            const response = await api.post('ongs', data);

            toast.success('Cadastro realizado com sucesso')
            alert(`Seu ID de acesso: ${response.data.id}`)

            history.push('/')
            
        } catch(err) {
            toast.error('Cadastro não realizado, verifique os seus dados')
        }
        

    }

  return (
    <Container>
        <Content>
            <section>
                <img src={logoImg} alt="Be The Hero"/>

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
            
                <Link to="/"><FiArrowLeft size={16} color="#E02041"/>Já tenho cadastro</Link>
            </section>

            <Form onSubmit={handleSubmit}>
                <Input 
                    name="name" 
                    placeholder="Nome da ONG" 
                    value={name} 
                    onChange={e => setName(e.target.value)}/>
                <Input 
                    name="email" 
                    type="email" 
                    placeholder="E-mail"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}/>
                <Input 
                    name="whatsaap" 
                    placeholder="Whatsaap"
                    value={whatsaap} 
                    onChange={e => setWhatsaap(e.target.value)}/>

                <div>
                    <Input 
                        name="city" 
                        placeholder="Cidade"
                        value={city} 
                    onChange={e => setCity(e.target.value)}/>
                    <Input 
                        name="UF" 
                        placeholder="UF" 
                        style={{width: 80}}
                        value={uf} 
                        onChange={e => setUf(e.target.value)}/>
                </div>

                <button type="submit">Cadastrar</button>
            </Form>
        </Content>
    </Container>
  );
}
