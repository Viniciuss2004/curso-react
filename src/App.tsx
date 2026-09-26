import React from 'react';
import './App.css';
import FormularioCadastro from "./components/formularioCadastro/FormularioCadastro";
import {Container, Typography} from "@mui/material";

function App() {
    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" component="h1" align="center">
                Formulário de Cadastro
            </Typography>
            <FormularioCadastro/>
        </Container>
    );
}

export default App;
