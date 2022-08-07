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

    const handleClickButton = () => {

        // valida se todos os campos foram preenchidos e validados antes de subir para po banco de dados
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
                nome: values.name,
                data_nascimento: values.date,
                email: values.email,
                cep: values.cep,
                rua: values.street,
                numero: values.number,
                bairro: values.district,
                cidade: values.city,

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
                    <label htmlFor="name">Nome Completo: </label>
                    <input id='name' type="text" name='name' placeholder='nome completo do paciente' required onChange={handleChangeValues}/>
                </div>

                <div>
                    <label htmlFor="date">Data de Nascimento: </label>
                    <input id='date' type="text" pattern="\d{2}/\d{2}/\d{4}" name='date' placeholder='dd/mm/aaaa' required onChange={handleChangeValues}/>
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
                    <label htmlFor="street">Rua: </label>
                    <input id='street' type="text" name='street' placeholder="ex: Rua Sta Cruz" required onChange={handleChangeValues}/>
                </div>

                <div>
                    <label htmlFor="number">Número: </label>
                    <input id='number' type="text" name='number' placeholder='ex: 122' required onChange={handleChangeValues}/>
                </div>

                <div>
                    <label htmlFor="district">Bairro: </label>
                    <input id='district' type="text" name='district' placeholder='ex: Centro' required onChange={handleChangeValues}/>
                </div>

                <div>
                    <label htmlFor="city">Cidade: </label>
                    <input id='city' type="text" name='city' placeholder="ex: São Paulo" required onChange={handleChangeValues}/>
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
