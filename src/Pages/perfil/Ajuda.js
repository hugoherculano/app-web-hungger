import React from "react";

import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { BsChevronLeft } from 'react-icons/bs';

import { Link } from 'react-router-dom'

function Ajuda() {

    return (
        <div id="root-home">
            <header className="ajudaHeader">
                <Link to="/app/perfil"><BsChevronLeft size={20} /></Link>
                <h1>Como você prefere falar com a gente?</h1>
            </header>

            <section className="ajudaSection">
                <div>
                    <FiMail size={50} />
                    <p>Tem alguma dúvida? Podemos te ajudar pelo nosso canal de e-mail.</p>
                    <a href="sdsad">Mandar e-mail</a>
                </div>

                <div>
                    <AiOutlineWhatsApp size={50} />
                    <p>Precisa de uma ajuda agora? Entre em contato com nosso atendimento através do WhatsApp.</p>
                    <a href="sdsadsa">Enviar mensagem</a>
                </div>
            </section>

            {/*
            <section className="homeCategorys">
                <div className="homeCategorys-content">

                    <section>
                        <button onClick={ e => click1(e)} className="pop">
                            <img src={All} alt="all" />
                        </button>
                        <p>Tudo</p>
                    </section>

                    <section onClick={e => click2(e)}>
                        <button className="banana" >
                            <img src={Pizza} alt="pizza" />
                        </button>
                        <p>Pizza</p>
                    </section>

                    <section>
                        <button onClick={e => click3()} >
                            <img src={Burguer} alt="burguer" />
                        </button>
                        <p>Lanches</p>
                    </section>

                    <section>
                        <button onClick={e => click4()} >
                            <img src={Cake} alt="cake" />
                        </button>
                        <p>Doces</p>
                    </section>

                    <section>
                        <button onClick={e => click5()} >
                            <img src={Prato} alt="brasileira" />
                        </button>
                        <p>Brasileira</p>
                    </section>

                    <section>
                        <button onClick={e => click6()} >
                            <img src={Sorvete} alt="sorvete" />
                        </button>
                        <p>Sorvete</p>
                    </section>

                    <section>
                        <button onClick={e => click7()} >
                            <img src={Sushi} alt="sushi" />
                        </button>
                        <p>Sushi</p>
                    </section>
                </div>
            </section>
            */}

        </div>
    )
}

export default Ajuda;