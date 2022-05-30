import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import '../Styles/style.css';


//import Inicio from '../Pages/Inicio';
import Inicio from '../Pages/Inicio';
import Index from '../Pages/cadastro/Index';
import Login from '../Pages/cadastro/Login';
import Cadastro from '../Pages/cadastro/Cadastro';
import CadSucesso from '../Pages/cadastro/CadSucesso';

function Router() {

    const [userId, setUserID] = useState(localStorage.getItem('@Hungger:user'));    

    function updateUserId(user) {
        setUserID(user)
    }

    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={ <Index /> } exact />

                <Route path='/app' element={ userId ? <Inicio /> : <Navigate to='/login' /> } exact />

                <Route path='/login' element={ userId ? <Navigate to='/app' /> : <Login updateUserId={updateUserId} /> } exact />

                <Route path='/cadastro' element={ <Cadastro /> } exact />
                <Route path='/cadastro/sucesso' element={ <CadSucesso /> } exact />

                <Route path='*' element={ <Navigate to='/' /> } />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;
