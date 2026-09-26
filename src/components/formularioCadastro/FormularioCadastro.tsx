import React, {FormEvent, useState} from 'react';
import {Button, FormControlLabel, Switch, TextField} from "@mui/material";

interface ErrosFormulario {
    nome?: string,
    cpf?: string
}

function FormularioCadastro() {
    const [campos, setCampos] = useState({nome: "", cpf: ""})
    const [erros, setErros] = useState<ErrosFormulario>({})

    function validarCampos(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const novosErros: ErrosFormulario = {};
        if (campos.nome.trim() === "") {
            novosErros.nome = "Campo nome é obrigatório";
        }
        if (campos.cpf.trim() === "") {
            novosErros.cpf = "Campo CPF é obrigatório";
        }
        setErros(novosErros);

        if (Object.keys(novosErros).length > 0) {
            return false;
        }
        console.log(campos)
        return true;
    }

    return (
        <form onSubmit={validarCampos}>
            <TextField id="nome" label="Nome completo" variant="outlined" size="small" margin="normal"
                       fullWidth
                       error={!!erros.nome}
                       helperText={erros.nome}
                       onChange={event => {
                           setCampos({...campos, nome: event.target.value});
                           setErros({...erros, nome: undefined});
                       }}/>
            <TextField id="cpf-basic" label="CPF" variant="outlined" size="small" margin="normal"
                       fullWidth
                       error={!!erros.cpf}
                       helperText={erros.cpf}
                       onChange={event => {
                           setCampos({...campos, cpf: event.target.value});
                           setErros({...erros, cpf: undefined});
                       }}/>

            <FormControlLabel control={<Switch name="promocoes" defaultChecked></Switch>} label="Promoções"/>
            <FormControlLabel control={<Switch name="notificacao" defaultChecked></Switch>} label="Notificações"/>

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;