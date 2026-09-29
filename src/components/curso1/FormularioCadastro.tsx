import React, {SubmitEvent, useState} from 'react';
import {Box, Button, FormControlLabel, Paper, Stack, Switch, TextField, Typography} from "@mui/material";

interface ErrosFormulario {
    nome?: string,
    cpf?: string
}

interface FormularioCadastroProps {
    aoEnviar: (dados: object) => void
}

function FormularioCadastro({aoEnviar}: FormularioCadastroProps) {
    const [campos, setCampos] = useState({nome: "", cpf: "", promocoes: true, notificacoes: true})
    const [erros, setErros] = useState<ErrosFormulario>({})

    function validarCampos(event: SubmitEvent<HTMLFormElement>) {
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
        aoEnviar(campos);
        return true;
    }

    return (
        <Paper elevation={3} sx={{p: 4, mt: 4, mx: "auto", maxWidth: 480, borderRadius: 3 }}>
            <Typography variant="h4" component="h1" align="center" >
                Formulário de Cadastro
            </Typography>
            <Box component="form" onSubmit={validarCampos} sx={{mt:3}}>
                <Stack spacing={2}>
                    <TextField id="nome" label="Nome completo" variant="outlined"
                               fullWidth
                               error={!!erros.nome}
                               helperText={erros.nome}
                               onChange={event => {
                                   setCampos({...campos, nome: event.target.value});
                                   setErros({...erros, nome: undefined});
                               }}/>
                    <TextField id="cpf-basic" label="CPF" variant="outlined"
                               fullWidth
                               error={!!erros.cpf}
                               helperText={erros.cpf}
                               onChange={event => {
                                   setCampos({...campos, cpf: event.target.value});
                                   setErros({...erros, cpf: undefined});
                               }}/>

                    <Stack direction="row" >
                        <FormControlLabel control={<Switch name="promocoes" checked={campos.promocoes} onChange={event => {setCampos({...campos, promocoes: event.target.checked})}}/>} label="Promoções"/>
                        <FormControlLabel control={<Switch name="notificacoes" checked={campos.notificacoes} onChange={event => {setCampos({...campos, notificacoes: event.target.checked})}}/>} label="Notificações"/>
                    </Stack>

                    <Button type="submit" variant="contained" color="primary" size="large" sx={{mt: 1, alignSelf: "flex-end"}}>
                        Cadastrar
                    </Button>
                </Stack>
            </Box>
        </Paper>
    );
}

export default FormularioCadastro;