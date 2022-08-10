import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import produce from "immer";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
        idpacientes: props.id,
        nome: props.nome,
        data_nascimento: props.data_nascimento,
        email: props.email,
        cep: props.cep,
        rua: props.rua,
        numero: props.numero,
        bairro: props.bairro,
        cidade: props.cidade,
    });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditPatient = () => {
    Axios.put("http://localhost:3001/edit", {
        idpacientes: editValues.id,
        nome: editValues.nome,
        data_nascimento: editValues.data_nascimento,
        email: editValues.email,
        cep: editValues.cep,
        rua: editValues.rua,
        numero: editValues.numero,
        bairro: editValues.bairro,
        cidade: editValues.cidade,
    }).then(() => {
      props.setListPatients(
        props.listCard.map((value) => {
          return value.id == editValues.id
            ? {
                id: editValues.id,
                nome: editValues.nome,
                data_nascimento: editValues.data_nascimento,
                email: editValues.email,
                cep: editValues.cep,
                rua: editValues.rua,
                numero: editValues.numero,
                bairro: editValues.bairro,
                cidade: editValues.cidade,
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeletePatient = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`).then(() => {
      props.setListPatients(
        props.listCard.filter((value) => {
          return value.id != editValues.id;
        })
      );
    });
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="idpacientes"
            label="idpacientes"
            defaultValue={props.idpacientes}
            type="text"
            fullWidth
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="nome"
            label="Nome Completo"
            defaultValue={props.nome}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="data_nascimento"
            pattern="\d{2}/\d{2}/\d{4}" 
            label="Data de Nascimento"
            defaultValue={props.data_nascimento}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="email"
            label="E-mail"
            defaultValue={props.email}
            type="email"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="cep"
            label="CEP"
            defaultValue={props.cep}
            type="text"
            pattern="\d{5}-\d{3}"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="rua"
            label="Rua"
            defaultValue={props.rua}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="numero"
            label="Número"
            defaultValue={props.numero}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="bairro"
            label="Bairro"
            defaultValue={props.bairro}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="cidade"
            label="Cidade"
            defaultValue={props.cidade}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeletePatient()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditPatient()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
