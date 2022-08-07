import React, {useState, useEffect} from 'react';
import {DataGrid} from '@mui/x-data-grid';

const Table = () => {

    const [listPatients, setPatients] = useState([]);

     //função que baixa a lista da api
    const fetchData = async () => {
        try {
            const res = await fetch('http://localhost:3001/getCard')
            const data = await res.json();
            setPatients(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    // filtra os as informações e pega os dados dos pacientes
    const rowData = listPatients?.map((patient, index) => {
        return {
            id: index,
            name: patient?.nome,
            date: patient?.data_nascimento,
            email: patient?.email,
            cep: patient?.cep,
            street: patient?.rua,
            number: patient?.numero,
            district: patient?.bairro,
            city: patient?.cidade,
        }
    });

    // definr as colunas da tabela
    const cols = [
        {field: 'id', headerName: 'ID', width: 50},
        {field: 'name', headerName: 'Nome', width: 250},
        {field: 'date', headerName: 'Data de Nascimento', width: 200},
        {field: 'email', headerName: 'E-mail', width: 250},
        {field: 'cep', headerName: 'CEP', width: 100},
        {field: 'street', headerName: 'Rua', width: 250},
        {field: 'number', headerName: 'Número', width: 100},
        {field: 'district', headerName: 'Bairro', width: 200},
        {field: 'city', headerName: 'Cidade', width: 200},
    ]


    return (
        <div style={{ height: 900, width: "98%"}}>
            <DataGrid
                checkboxSelection
                pageSize={10}
                rowsPerPageOptions={[10]}
                rows={rowData}
                columns={cols}
                sx={{
                    boxShadow: 2,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                    },
                }}
            />
        </div>
    )

}

export default Table
