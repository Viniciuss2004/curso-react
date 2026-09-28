import React from 'react';
import './App.css';
import FormularioCadastro from "./components/formularioCadastro/FormularioCadastro";
import {Container, Typography} from "@mui/material";

function App() {
    function aoEnviarForm(dados: object) {
        console.log(dados);
    }

    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" component="h1" align="center">
                Formulário de Cadastro
            </Typography>
            <FormularioCadastro aoEnviar={aoEnviarForm}/>
        </Container>
    );
}

export default App;
