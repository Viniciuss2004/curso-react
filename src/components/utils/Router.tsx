import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import PaginaCurso1 from "../curso1/PaginaCurso1";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/curso1" replace/>}/>
            <Route path="/curso1" element={<PaginaCurso1/>}/>
            <Route path="*" element={<Navigate to="/curso1" replace/>}/>
        </Routes>
    );
}

export default AppRoutes;
