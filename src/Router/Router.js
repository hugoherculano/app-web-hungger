import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import '../Styles/style.css';


//import Inicio from '../Pages/Inicio';
import Inicio from '../Pages/home/Home';
import Index from '../Pages/cadastro/Index';
import Login from '../Pages/cadastro/Login';
import Cadastro from '../Pages/cadastro/Cadastro';
import CadSucesso from '../Pages/cadastro/CadSucesso';

import Perfil from '../Pages/perfil/Perfil';
import Ajuda from '../Pages/perfil/Ajuda';
import Carteira from '../Pages/carteira/Carteira';
import Indicacao from '../Pages/carteira/Indicacao';
import TutorIndica from '../Pages/carteira/TutorIndica';
import Enderecos from '../Pages/enderecos/Enderecos';
import CadastroEndereco from '../Pages/enderecos/CadastroEndereco';
import UpdateEndereco from '../Pages/enderecos/UpdateEndereco';

import Cardapio from '../Pages/restaurants/Cardapio';
import VerItem from '../Pages/restaurants/VerItem';
import Sacola from '../Pages/restaurants/Sacola';
import FazerPedido from '../Pages/restaurants/FazerPedido';

import Pedido from '../Pages/pedidos/Pedido';

function Router() {

    const [userId, setUserID] = useState(localStorage.getItem('@Hungger:user'));
    const [dados, setDados] = useState({});

    const [item, setItem] = useState({});

    function updateUserId(user) {
        setUserID(user)
    }

    function dadosCardapio(data) {
        setDados(data)
    }

    function enviaItem(data) {
        setItem(data)
    }

    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={ userId ? <Navigate to='/app' /> : <Index /> } exact />

                <Route path='/app' element={ userId ? <Inicio dadosCardapio={dadosCardapio} /> : <Navigate to='/' /> } exact />

                <Route path='/login' element={ userId ? <Navigate to='/app' /> : <Login updateUserId={updateUserId} /> } exact />

                <Route path='/cadastro' element={ userId ? <Navigate to='/app' /> : <Cadastro /> } exact />
                <Route path='/cadastro/sucesso' element={ userId ? <Navigate to='/app' /> : <CadSucesso /> } exact />

                <Route path='/app/perfil' element={ userId ? <Perfil /> : <Navigate to='/' /> } exact />
                <Route path='/app/perfil/ajuda' element={ userId ? <Ajuda /> : <Navigate to='/' /> } exact />

                <Route path='/app/carteira' element={ userId ? <Carteira /> : <Navigate to='/' /> } exact />
                <Route path='/app/indicacao' element={ userId ? <Indicacao /> : <Navigate to='/' /> } exact />
                <Route path='/app/indicacao/como-indicar' element={ userId ? <TutorIndica /> : <Navigate to='/' /> } exact />

                <Route path='/app/enderecos' element={ userId ? <Enderecos /> : <Navigate to='/' /> } exact />
                <Route path='/app/enderecos/novo' element={ userId ? <CadastroEndereco /> : <Navigate to='/' /> } exact />
                <Route path='/app/enderecos/atualizar/:idendereco' element={ userId ? <UpdateEndereco /> : <Navigate to='/' /> } exact />

                <Route path='/app/delivery/:restaurant' element={ userId ? <Cardapio dadosCad={dados} enviaItem={enviaItem} /> : <Navigate to='/' /> } exact />
                <Route path='/app/delivery/:restaurant/:item' element={ userId ? <VerItem dadosItem={item} /> : <Navigate to='/' /> } exact />
                <Route path='/app/sacola' element={ userId ? <Sacola /> : <Navigate to='/' /> } exact />
                <Route path='/app/sacola/pedido' element={ userId ? <FazerPedido /> : <Navigate to='/' /> } exact />

                <Route path='/app/pedidos/:idpedido' element={ userId ? <Pedido /> : <Navigate to='/' /> } exact />
                

                <Route path='*' element={ <Navigate to='/' /> } />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;
