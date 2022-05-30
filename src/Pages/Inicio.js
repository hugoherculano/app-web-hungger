import React from "react";


import Banner from '../Imgs/pizza.gif';
import Letrado from '../Imgs/letrado.png';


function Inicio() {

    const username = localStorage.getItem('@Hungger:username');

    return (
        <>
            <div id="root-white">

                <div className="tela-cadastro-suc">
                    <header>
                        <img src={Letrado} alt="logo-hungger" />
                    </header>
                    
                    <main>
                        <h1>{ username }, a partir de amanhã estaremos funcionando!</h1>
                        <img src={Banner} alt="coracao-hungger" />
                    </main>
                    
                    <footer>
                    </footer>
                </div>

            </div>
        </>
    )
}

export default Inicio;