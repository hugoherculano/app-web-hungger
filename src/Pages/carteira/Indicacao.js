import React from "react";

import { AiOutlineUsergroupAdd, AiOutlineHeart } from 'react-icons/ai';
import { HiHome, HiUser } from 'react-icons/hi';
import { RiFileList3Fill } from 'react-icons/ri';
import { FaChevronRight } from 'react-icons/fa';
import { BsCashCoin } from 'react-icons/bs';

import { Link } from 'react-router-dom'

function Indicacao() {

    return (
        <div id="root-home">

            <section className="space15pad"></section>

            <section className="indicaNick">
                <Link to='como-indicar'>Ganhe dinheiro indicando <FaChevronRight /></Link>
            </section>

            <header className="indicaHeader">
                <div className="indicaHeader-content">
                    <AiOutlineUsergroupAdd size={25} />
                    <p>Indicados</p>
                    <h2>0</h2>
                </div>

                <div className="indicaHeader-content">
                    <BsCashCoin size={25} />
                    <p>Total de ganhos</p>
                    <h2>R$ 0,00</h2>
                </div>
            </header>

            <section className="carteiraAccount">

                <div className="carteiraAccount-item">
                    <section>
                        <div>
                            <article ></article>
                            <AiOutlineHeart className="slugSaldoOk" size={32} />
                        </div>

                        <div>
                            <h3 className="slugSaldoOk">Indicado(a)</h3>
                            <h4>Maria</h4>
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

export default Indicacao;