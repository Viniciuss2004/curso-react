import React from 'react';
import {AppBar, Toolbar, Typography, Button, Stack} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

export default function NavBar() {
    return (
        <AppBar position="static" sx={{bgcolor: "#0f172a"}}>
            <Toolbar sx={{justifyContent: "space-between"}}>
                <Typography variant="h6" sx={{fontWeight: "bold"}}>
                    PraticarReact
                </Typography>

                <Stack direction="row" spacing={1} sx={{alignItems: "center"}}>
                    <Button component={RouterLink} to="/curso1" color="inherit">
                        Curso 1
                    </Button>
                    <Typography variant="body2" sx={{color: "grey.500", px: 1.5}}>
                        Curso 2 (em breve)
                    </Typography>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
