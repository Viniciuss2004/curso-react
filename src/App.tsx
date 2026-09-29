import React from 'react';
import './App.css';
import {Box} from "@mui/material";
import NavBar from "./components/utils/NavBar";
import AppRoutes from "./components/utils/Router";

function App() {
    return (
        <Box component="article" sx={{width: "100%"}}>
            <NavBar/>
            <Box sx={{mt: 8}}>
                <AppRoutes/>
            </Box>
        </Box>
    );
}

export default App;
