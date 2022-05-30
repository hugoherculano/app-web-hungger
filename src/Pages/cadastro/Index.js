import React from "react";


import Banner from '../../Imgs/pedidos.svg';
import Letrado from '../../Imgs/letrado.png';

import { Link } from 'react-router-dom'


function Cadastro() {
    return (
        <>
            <div id="root-white">

                <div className="tela-serpro-def">
                    <header>
                        <img src={Letrado} alt="logo-hungger" />
                    </header>
                    
                    <main>
                        <h1>Somos o melhor delivery do Brasil</h1>
                        <img src={Banner} alt="sacola-hungger" />
                    </main>
                    
                    <footer>
                        <Link to={'login'}>Fazer login</Link>
                        <Link to={'cadastro'}>Criar conta</Link>
                    </footer>
                </div>

            </div>
        </>
    )
}

export default Cadastro;