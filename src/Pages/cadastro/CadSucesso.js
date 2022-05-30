import React from "react";


import Banner from '../../Imgs/sucesso.gif';
import Letrado from '../../Imgs/letrado.png';

import { Link } from 'react-router-dom'


function CadSucesso() {
    return (
        <>
            <div id="root-white">

                <div className="tela-cadastro-suc">
                    <header>
                        <img src={Letrado} alt="logo-hungger" />
                    </header>
                    
                    <main>
                        <h1>Bem-vindo(a) no melhor delivery do Brasil!🧡</h1>
                        <img src={Banner} alt="felicidade-hungger" />
                    </main>
                    
                    <footer>
                        <Link to={'/login'}>Fazer login</Link>
                    </footer>
                </div>

            </div>
        </>
    )
}

export default CadSucesso;