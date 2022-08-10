import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {GoToPatientsList} from '../../routes/RouteFunction';
import { Btn, FieldBox, FormContainer } from './RegistrationPageStyled';
import { FaAngleLeft } from 'react-icons/fa';
import axios from 'axios';


const RegistrationPage = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState()

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name] : value.target.value,
        }))

    }

    const handleClickButton = (e) => {

        // valida se todos os campos foram preenchidos e validados antes de subir para po banco de dados

        // e.preventDefault()

        let inputs = document.getElementsByClassName('required');
        let len = inputs.length;
        let valid = true;
        for(let i=0; i < len; i++){
           if (!inputs[i].value){ valid = false; }
        }
        if (!valid){
          alert('Por favor preencha todos os campos.');
          return false;
        } else { 

            // envia os dados do formulário para o banco de dados
            axios.post('http://localhost:3001/register', {
                nome: values.nome,
                data_nascimento: values.data_nascimento,
                email: values.email,
                cep: values.cep,
                rua: values.rua,
                numero: values.numero,
                bairro: values.bairro,
                cidade: values.cidade,

            }).then((response) => {
                console.log(response);
            })
            }
    }

    return (
        // Formulário de envio dos dados da ficha do cliente
        <FormContainer>
            <FieldBox>
                <legend>Cadastro</legend>

                <div>
                    <label htmlFor="nome">Nome Completo: </label>
                    <input id='nome' type="text" name='nome' placeholder='nome completo do paciente' required onChange={handleChangeValues}/>
                </div>

                <div>
                    <label htmlFor="data_nacimiento">Data de Nascimento: </label>
                    <input id='data_nascimento' type="text" pattern="\d{2}/\d{2}/\d{4}" name='data_nascimento' placeholder='dd/mm/aaaa' required onChange={handleChangeValues}/>
                </div>

                <div>
                    <label htmlFor="email">E-mail: </label>
                    <input id='email' type="email" name='email' placeholder="email@email.com" required onChange={handleChangeValues}/>
                </div>

                <div>
                    <label htmlFor="cep">CEP: </label>
                    <input id='cep' type="text" name='cep' placeholder='00000-000' pattern="\d{5}-\d{3}" required onChange={handleChangeValues}/>
                </div>

                <div>
                    <label htmlFor="rua">Rua: </label>
                    <input id='rua' type="text" name='rua' placeholder="ex: Rua Sta Cruz" required onChange={handleChangeValues}/>
                </div>

                <div>
                    <label htmlFor="numero">Número: </label>
                    <input id='numero' type="text" name='numero' placeholder='ex: 122' required onChange={handleChangeValues}/>
                </div>

                <div>
                    <label htmlFor="bairro">Bairro: </label>
                    <input id='bairro' type="text" name='bairro' placeholder='ex: Centro' required onChange={handleChangeValues}/>
                </div>

                <div>
                    <label htmlFor="cidade">Cidade: </label>
                    <input id='cidade' type="text" name='cidade' placeholder="ex: São Paulo" required onChange={handleChangeValues}/>
                </div>

                <Btn>
                    <button type='reset'>Cancelar</button>
                    <button type='submit' onClick={() => handleClickButton()}>Salvar</button>
                </Btn>
            </FieldBox>
            
            <button onClick={() => GoToPatientsList(navigate)}><FaAngleLeft className='icon'/> Voltar</button>
        </FormContainer>

    )
}

export default RegistrationPage
