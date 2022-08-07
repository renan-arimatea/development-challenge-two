import React from 'react';
import { useNavigate } from 'react-router-dom';
import {GoToHome, GoToRegister} from '../../routes/RouteFunction';
import {FaPlusCircle} from 'react-icons/fa';
import {ImExit} from 'react-icons/im';
import { ListContainer } from './PatientsListPageStyled';
import Table from "../../components/table/Table"

const PatientsListPage = () => {

    const navigate = useNavigate();

    return (
        <ListContainer>
            <div>
                <button onClick={() => GoToRegister(navigate)}><FaPlusCircle/> Incluir</button>
                <button className='exit' onClick={() => GoToHome(navigate)}><ImExit/> Sair</button>
            </div>
            <Table/>  
        </ListContainer>
    )
}

export default PatientsListPage;
