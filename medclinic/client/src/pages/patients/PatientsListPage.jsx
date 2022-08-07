import React from 'react';
import { useNavigate } from 'react-router-dom';
import {GoToRegister} from '../../routes/RouteFunction';
import {FaPlusCircle} from 'react-icons/fa';
import { ListContainer } from './PatientsListPageStyled';
import Table from "../../components/table/Table"

const PatientsListPage = () => {

    const navigate = useNavigate();

    return (
        <ListContainer>
            <button onClick={() => GoToRegister(navigate)}><FaPlusCircle/> Incluir</button>
            <Table/>  
        </ListContainer>
    )
}

export default PatientsListPage;
