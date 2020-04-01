import React, {useState, useEffect} from 'react';

import { Container, Header, Dashboard } from './styles';

import {Link} from 'react-router-dom';

import {toast} from 'react-toastify';

import logoImg from '../../assets/logo.svg';

import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

import history from '../../services/history';

export default function Profile() {

    const ongId = localStorage.getItem('ongId');

    const ongName = localStorage.getItem('ongName');

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        api.get('profile', {headers: {
            Authorization: ongId,
        }}).then(response => {
            setIncidents(response.data)
        })
    }, [ongId, incidents]);

    async function handleDeleteIncident(id) {
        try {
            api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            })
        } catch(err) {
            toast.error('Erro ao deletar, tente novamente.')
        }
    }

    async function handleLogout() {
        localStorage.clear()
        history.push('/')
        
    }

  return (
    <Container>
        <Header>
            <img src={logoImg} alt="Be The Hero"/>
            <span>Bem vindo, {ongName}</span>

            <Link to="/incidents/new">Cadastrar novo caso</Link>

            <button onClick={handleLogout}>
                <FiPower size={18} color="#E02041"/>
            </button>
            
        </Header>

        <Dashboard>
            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                </li>
               
                ))}
                    
            </ul>
        </Dashboard>
    </Container>
  );
}
