import React from "react";

import { HiHome, HiUser } from 'react-icons/hi';
import { RiFileList3Fill } from 'react-icons/ri';

import { Link } from 'react-router-dom'

function TutorIndica() {

    return (
        <div id="root-home">

            <section className="space15pad"></section>

            <section className="tutorIndica">

                <div className="tutorIndica-item">

                    <section>
                        <div>
                            <h2>1º</h2>
                            <h3>Passo</h3>
                        </div>

                        <div>
                            <p>Peça para seu indicado(a) acessar <strong> hungger.com.br</strong> e logo depois
                            peça para seu indicado(a) fazer o cadastro clicando no botão de <strong>Criar Conta.</strong></p>
                        </div>
                    </section>

                    <section>
                        <div>
                            <h2>2º</h2>
                            <h3>Passo</h3>
                        </div>

                        <div>
                            <p>Na última tela para finalizar o cadastro, pedimos a ele(a) para informar quem indicou
                                ela(e) a ir fazer o cadastro na <strong>Hungger.</strong> Peça a ela(e) para informar
                                seu nickname de usuário <strong>@hugovini.</strong>
                            </p>
                        </div>
                    </section>

                    <section>
                        <div>
                            <h2>3º</h2>
                            <h3>Passo</h3>
                        </div>

                        <div>
                            <p>Depois do cadastro estiver sido concluído, você acaba de ter um(a) indicado(a). Todas
                                as vezes que ela(e) fizer um pedido você ganhará <strong>R$ 0,25</strong> em sua conta 
                                <strong> Hungger.</strong> Não há limites de ganhos!
                            </p>
                        </div>
                    </section>

                </div>          

            </section>


            <footer className="homeFooter">
                <Link to='/app' className="desative-menu">
                    <HiHome size={22} />
                    <p>Início</p>
                </Link>

                <Link to='/app/pedidos' className="desative-menu">
                    <RiFileList3Fill size={22} />
                    <p>Pedidos</p>
                </Link>

                <Link to='/app/perfil' className="desative-menu">
                    <HiUser size={22} />
                    <p>Perfil</p>
                </Link>
            </footer>  

        </div>
    )
}

export default TutorIndica;