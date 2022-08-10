import React, {useState, useEffect} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import axios from 'axios';
import FormDialog from '../dialog/dialog'


const Table = (props) => {

    //caixa de dialogo
    const [open, setOpen] = React.useState(false)

    const handleClickCard = () => {
        setOpen(true);
    }

    
    const [patients, setPatients] = useState([]);


    //função que baixa a lista da api
    useEffect(() =>{
        axios.get('http://localhost:3001/patients')
        
        .then((res) => {
            setPatients(res.data)
            console.log(res.data);
        })

        .catch((err) => {
            console.log(err)    
        })
    }, [])

    // filtra os as informações e pega os dados dos pacientes
    const rowData = patients?.map((patient, idpacientes) => {
        return {
            id: idpacientes,
            nome: patient?.nome,
            data_nascimento: patient?.data_nascimento,
            email: patient?.email,
            cep: patient?.cep,
            rua: patient?.rua,
            numero: patient?.numero,
            bairro: patient?.bairro,
            cidade: patient?.cidade,
        }
    });


    // definr as colunas da tabela
    const cols = [
        {field: 'idpacientes', headerName: 'ID', width: 50},
        {field: 'nome', headerName: 'Nome', width: 250},
        {field: 'data_nascimento', headerName: 'Data de Nascimento', width: 200},
        {field: 'email', headerName: 'E-mail', width: 250},
        {field: 'cep', headerName: 'CEP', width: 100},
        {field: 'rua', headerName: 'Rua', width: 250},
        {field: 'numero', headerName: 'Número', width: 100},
        {field: 'bairro', headerName: 'Bairro', width: 200},
        {field: 'cidade', headerName: 'Cidade', width: 200},
    ]

    return (
        <>
            <FormDialog 
                open={open} 
                setOpen={setOpen}
                nome={props.nome}
                data_nascimento= {props.data_nascimento}
                email={ props.email}
                cep= {props.cep}
                rua= {props.rua}
                numero= {props.numero}
                bairro= {props.bairro}
                cidade={props.cidade}
                listCard= {props.listCard}
                setListCard ={props.setListCard}
                id={props.idpacientes}
            />
            <div style={{ height: 900, width: "98%"}}>
                <DataGrid
                    onRowClick={() => handleClickCard()}
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
        </>
    )

}

export default Table
