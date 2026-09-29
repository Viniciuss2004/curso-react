import React from 'react';
import {Box, Divider} from "@mui/material";
import Explicacao from "./Explicacao";
import FormularioCadastro from "./FormularioCadastro";

function PaginaCurso1() {
    function aoEnviarForm(dados: object) {
        console.log(dados);
    }

    return (
        <Box sx={{width: "100%"}}>
            <Box sx={{py: 6}}>
                <Explicacao/>
            </Box>

            <Divider sx={{maxWidth: 720, mx: "auto"}}/>

            <Box sx={{py: 6}}>
                <FormularioCadastro aoEnviar={aoEnviarForm}/>
            </Box>
        </Box>
    );
}

export default PaginaCurso1;
