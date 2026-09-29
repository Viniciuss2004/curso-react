import React from 'react';
import {Box, Chip, Divider, List, ListItem, ListItemText, Paper, Stack, Typography} from "@mui/material";

const conceitos = [
    {
        titulo: "Componentes funcionais e hooks",
        descricao: "O formulário é um componente funcional que usa useState para guardar os valores dos campos (nome, CPF, promoções e notificações) e os erros de validação, tudo em um único lugar."
    },
    {
        titulo: "Componentes controlados",
        descricao: "Cada TextField e Switch do MUI tem seu valor amarrado ao estado do React (value/checked) e atualiza esse estado a cada onChange, então a UI sempre reflete os dados atuais."
    },
    {
        titulo: "Validação de campos",
        descricao: "No envio do formulário (onSubmit), os campos obrigatórios são checados antes de considerar o cadastro válido. Se faltar algo, os erros aparecem embaixo do campo (helperText) e o envio é cancelado."
    },
    {
        titulo: "Eventos e comunicação entre componentes",
        descricao: "O formulário não decide o que fazer com os dados: ele recebe a função aoEnviar por props e delega essa responsabilidade para quem o utiliza, mantendo o componente reutilizável."
    },
];

function Explicacao() {
    return (
        <Paper elevation={0} sx={{p: 4, maxWidth: 720, mx: "auto", bgcolor: "transparent"}}>
            <Stack spacing={1} sx={{mb: 3, alignItems: "center"}}>
                <Chip label="Curso 1" color="primary" size="small"/>
                <Typography variant="h4" component="h2" align="center" sx={{fontWeight: "bold"}}>
                    O que eu aprendi
                </Typography>
                <Typography variant="body1" color="text.secondary" align="center">
                    Um formulário de cadastro em React, do zero até validado.
                </Typography>
            </Stack>

            <Divider sx={{mb: 2}}/>

            <List disablePadding>
                {conceitos.map(conceito => (
                    <ListItem key={conceito.titulo} alignItems="flex-start" sx={{px: 0, py: 1.5}}>
                        <ListItemText
                            primary={conceito.titulo}
                            secondary={conceito.descricao}
                            slotProps={{primary: {sx: {fontWeight: 600}}}}
                        />
                    </ListItem>
                ))}
            </List>

            <Box sx={{mt: 2, textAlign: "center"}}>
                <Typography variant="body2" color="text.secondary">
                    Abaixo está a prática: o mesmo formulário rodando de verdade.
                </Typography>
            </Box>
        </Paper>
    );
}

export default Explicacao;
