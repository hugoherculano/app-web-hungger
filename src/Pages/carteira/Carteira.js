import React from "react";

import { AiOutlineDollar, AiOutlineSmile } from 'react-icons/ai';
import { HiHome, HiUser } from 'react-icons/hi';
import { RiFileList3Fill } from 'react-icons/ri';
import { BiWallet } from 'react-icons/bi';
import { IoPizzaOutline } from 'react-icons/io5';

import { Link } from 'react-router-dom'

function Carteira() {

    return (
        <div id="root-home">

            <section className="space15pad"></section>

            <section className="homeCarteira">
                <div className="homeCarteira-content">
                    <div>
                        <BiWallet size={24} />
                        <h3>Carteira Hungger</h3>
                    </div>
                    <p>Saldo disponível</p>
                    <h2>R$ 0,25</h2>
                </div>
            </section>

            <section className="carteiraAccount">

                <div className="carteiraAccount-item">
                    <section>
                        <div>
                            <article ></article>
                            <IoPizzaOutline className="slugSaldoNot" size={32} />
                        </div>

                        <div>
                            <h3 className="slugSaldoNot">Saldo utilizado</h3>
                            <h4>R$ 0,25</h4>
                        </div>
                    </section>

                    <p>20/05/2000</p>
                </div>  


                <div className="carteiraAccount-item">
                    <section>
                        <div>
                            <article ></article>
                            <AiOutlineSmile className="slugSaldoOk" size={32} />
                        </div>

                        <div>
                            <h3 className="slugSaldoOk">Indicação</h3>
                            <h4>R$ 0,25</h4>
                        </div>
                    </section>

                    <p>20/05/2000</p>
                </div>  


                <div className="carteiraAccount-item">
                    <section>
                        <div>
                            <article ></article>
                            <AiOutlineDollar className="slugSaldoOk" size={32} />
                        </div>

                        <div>
                            <h3 className="slugSaldoOk">Ganhos Hungger</h3>
                            <h4>R$ 0,25</h4>
                        </div>
                    </section>

                    <p>20/05/2000</p>
                </div>

                <div className="carteiraAccount-item">
                    <section>
                        <div>
                            <article ></article>
                            <AiOutlineDollar className="slugSaldoOk" size={32} />
                        </div>

                        <div>
                            <h3 className="slugSaldoOk">Ganhos Hungger</h3>
                            <h4>R$ 0,25</h4>
                        </div>
                    </section>

                    <p>20/05/2000</p>
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

export default Carteira;