import React from "react";

import { AiOutlineQuestionCircle, AiOutlineUser, AiOutlineLogout,
         AiOutlineDollar, AiOutlineEnvironment, AiOutlineBell } from 'react-icons/ai';
import { MdNavigateNext } from 'react-icons/md';
import { HiHome, HiUser } from 'react-icons/hi';
import { RiFileList3Fill } from 'react-icons/ri';
import { BiWallet } from 'react-icons/bi';

import Letrado from '../../Imgs/logo_olho_hungger.png';

import { Link, useNavigate } from 'react-router-dom'

function Perfil() {

    const username = localStorage.getItem('@Hungger:username');
    const naviagate = useNavigate();

    function irMenu(e) {
        naviagate(e)
    }

    return (
        <div id="root-home">
            <header className="homeHeader">
                <div className="homeHeader-top">
                    <div>
                        <img src={Letrado} alt="logo" />
                    </div>
                    <h1>{ username }</h1>
                </div>
            </header>

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

            <ul className="perfilLista">
                <li onClick={e => irMenu('ajuda')}>
                    <div>
                        <AiOutlineQuestionCircle size={22} />
                        <p>Me ajuda</p>
                    </div>
                    <div><MdNavigateNext size={22} /></div>
                </li>

                <li onClick={e => irMenu('/app/carteira')}>
                    <div>
                        <BiWallet size={22} />
                        <p>Carteira</p>
                    </div>
                    <div><MdNavigateNext size={22} /></div>
                </li>

                <li onClick={e => irMenu('/app/indicacao')}>
                    <div>
                        <AiOutlineDollar size={22} />
                        <p>Indicações</p>
                    </div>
                    <div><MdNavigateNext size={22} /></div>
                </li>

                <li>
                    <div onClick={e => irMenu('/app/enderecos')}>
                        <AiOutlineEnvironment size={22} />
                        <p>Endereços</p>
                    </div>
                    <div><MdNavigateNext size={22} /></div>
                </li>

                <li>
                    <div>
                        <AiOutlineBell size={22} />
                        <p>Notificações</p>
                    </div>
                    <div><MdNavigateNext size={22} /></div>
                </li>

                <li>
                    <div>
                        <AiOutlineUser size={22} />
                        <p>Meus dados</p>
                    </div>
                    <div><MdNavigateNext size={22} /></div>
                </li>

                <li>
                    <div>
                        <AiOutlineLogout size={22} />
                        <p>Sair</p>
                    </div>
                    <div><MdNavigateNext size={22} /></div>
                </li>

            </ul>


            <footer className="homeFooter">
                <Link to='/app' className="desative-menu">
                    <HiHome size={22} />
                    <p>Início</p>
                </Link>

                <Link to='/app/pedidos' className="desative-menu">
                    <RiFileList3Fill size={22} />
                    <p>Pedidos</p>
                </Link>

                <Link to='#' className="active-menu">
                    <HiUser size={22} />
                    <p>Perfil</p>
                </Link>
            </footer>

        </div>
    )
}

export default Perfil;