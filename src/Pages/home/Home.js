import React, { useState } from "react";

import { BiWallet } from 'react-icons/bi';
import { BsChevronCompactDown } from 'react-icons/bs';
import { HiHome, HiUser } from 'react-icons/hi';
import { RiFileList3Fill } from 'react-icons/ri';

import Letrado from '../../Imgs/logo_olho_hungger.png';
import Profile from '../../Imgs/profile.png';

//import Pizza from '../../Imgs/icons/pizza.gif';
import Delivery from '../../Imgs/icons/delivery.gif';

//<img src={Pizza} alt="pizza" />

import { Link } from 'react-router-dom'

function Home() {

    const [menuUpDown, setMenuUpDown] = useState('off')

    function irRestaurant(e) {
        console.log(1)
    }

    //const username = localStorage.getItem('@Hungger:username');

    return (
        <div id="root-home">
            <section className={`homeMenuUpDown homeMenuUpDown-${menuUpDown}`}>
                <section className="homeMenuUpDown-footer">
                    <h3>Paragominas/PA</h3>
                    <section onClick={e => setMenuUpDown(menuUpDown === 'off' ? 'on' : 'off')}>
                        <BsChevronCompactDown size={18} />
                    </section>
                </section>
            </section>
            <header className="homeHeader">
                <div className="homeHeader-top">
                    <div>
                        <img src={Letrado} alt="logo" />
                    </div>
                    <h1>Gabriel</h1>
                </div>
                <section onClick={e => setMenuUpDown(menuUpDown === 'off' ? 'on' : 'off')}>
                    <BsChevronCompactDown size={18} />
                </section>
            </header>

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

            <ul className="homeListaRestaurantes">

                <li onClick={e => irRestaurant(e)} className="homeListaRestaurantes-card online-cad">
                    <div className="homeListaRestaurantes-card-img">
                        <img src={Profile} alt="logo" />
                    </div>

                    <section className="homeListaRestaurantes-card-text">
                        <div className="homeListaRestaurantes-card-text-1">
                            <h4 className="online">Hambúrgueria Tá</h4>
                        </div>
                        <div className="homeListaRestaurantes-card-text-2 text2-on">
                            <p>Hamburgueria</p>
                            <p>Jardim Atlântico</p>
                        </div>
                        <div className="homeListaRestaurantes-card-text-3">
                            <span className="empresa-on"><div></div> Aberto</span>
                            <div className="frete-normal">
                                <img src={Delivery} alt="delivery" />
                                <p>R$ 4,99</p>
                            </div>
                        </div>
                    </section>
                </li>

                <li className="homeListaRestaurantes-card offline-cad">
                    <div className="homeListaRestaurantes-card-img">
                        <img src={Letrado} alt="logo" />
                    </div>

                    <section className="homeListaRestaurantes-card-text">
                        <div className="homeListaRestaurantes-card-text-1">
                            <h4 className="offline">Hambúrgueria Tá na Mão Delivery</h4>
                        </div>
                        <div className="homeListaRestaurantes-card-text-2 text2-off">
                            <p>Hamburgueria</p>
                            <p>Jardim Atlântico</p>
                        </div>
                        <div className="homeListaRestaurantes-card-text-3">
                            <span className="empresa-off"><div></div> Fechado</span>
                            <div className="frete-gratis empresa-off2">
                                <img src={Delivery} alt="delivery" />
                                <p>R$ 5,99</p>
                            </div>
                        </div>
                    </section>
                </li>

                <li className="homeListaRestaurantes-card offline-cad">
                    <div className="homeListaRestaurantes-card-img">
                        <img src={Letrado} alt="logo" />
                    </div>

                    <section className="homeListaRestaurantes-card-text">
                        <div className="homeListaRestaurantes-card-text-1">
                            <h4 className="offline">Hambúrgueria Tá na Mão Delivery</h4>
                        </div>
                        <div className="homeListaRestaurantes-card-text-2 text2-off">
                            <p>Hamburgueria</p>
                            <p>Jardim Atlântico</p>
                        </div>
                        <div className="homeListaRestaurantes-card-text-3">
                            <span className="empresa-off"><div></div> Fechado</span>
                            <div className=" empresa-off">
                                <img src={Delivery} alt="delivery" />
                                <p>R$ 5,99</p>
                            </div>
                        </div>
                    </section>
                </li>
                
                <li className="homeListaRestaurantes-card online-cad">
                    <div className="homeListaRestaurantes-card-img">
                        <img src={Letrado} alt="logo" />
                    </div>

                    <section className="homeListaRestaurantes-card-text">
                        <div className="homeListaRestaurantes-card-text-1">
                            <h4 className="online">Hambúrgueria Tá na Mão Delivery</h4>
                        </div>
                        <div className="homeListaRestaurantes-card-text-2 text2-on">
                            <p>Hamburgueria</p>
                            <p>Jardim Atlântico</p>
                        </div>
                        <div className="homeListaRestaurantes-card-text-3">
                            <span className="empresa-on"><div></div> Aberto</span>
                            <div className="frete-gratis empresa-on2">
                                <img src={Delivery} alt="delivery" />
                                <p>R$ 5,99</p>
                            </div>
                        </div>
                    </section>
                </li>

                <li className="homeListaRestaurantes-card online-cad">
                    <div className="homeListaRestaurantes-card-img">
                        <img src={Letrado} alt="logo" />
                    </div>

                    <section className="homeListaRestaurantes-card-text">
                        <div className="homeListaRestaurantes-card-text-1">
                            <h4 className="online">Hambúrgueria Tá na Mão Delivery</h4>
                        </div>
                        <div className="homeListaRestaurantes-card-text-2 text2-on">
                            <p>Hamburgueria</p>
                            <p>Jardim Atlântico</p>
                        </div>
                        <div className="homeListaRestaurantes-card-text-3">
                            <span className="empresa-on"><div></div> Aberto</span>
                            <div className="frete-gratis empresa-on2">
                                <img src={Delivery} alt="delivery" />
                                <p>R$ 5,99</p>
                            </div>
                        </div>
                    </section>
                </li>

                <li className="homeListaRestaurantes-card online-cad">
                    <div className="homeListaRestaurantes-card-img">
                        <img src={Letrado} alt="logo" />
                    </div>

                    <section className="homeListaRestaurantes-card-text">
                        <div className="homeListaRestaurantes-card-text-1">
                            <h4 className="online">Hambúrgueria Tá na Mão Delivery</h4>
                        </div>
                        <div className="homeListaRestaurantes-card-text-2 text2-on">
                            <p>Hamburgueria</p>
                            <p>Jardim Atlântico</p>
                        </div>
                        <div className="homeListaRestaurantes-card-text-3">
                            <span className="empresa-on"><div></div> Aberto</span>
                            <div className="frete-gratis empresa-on2">
                                <img src={Delivery} alt="delivery" />
                                <p>R$ 5,99</p>
                            </div>
                        </div>
                    </section>
                </li>

                <li className="homeListaRestaurantes-card online-cad">
                    <div className="homeListaRestaurantes-card-img">
                        <img src={Letrado} alt="logo" />
                    </div>

                    <section className="homeListaRestaurantes-card-text">
                        <div className="homeListaRestaurantes-card-text-1">
                            <h4 className="online">Hambúrgueria Tá na Mão Delivery</h4>
                        </div>
                        <div className="homeListaRestaurantes-card-text-2 text2-on">
                            <p>Hamburgueria</p>
                            <p>Jardim Atlântico</p>
                        </div>
                        <div className="homeListaRestaurantes-card-text-3">
                            <span className="empresa-on"><div></div> Aberto</span>
                            <div className="frete-gratis empresa-on2">
                                <img src={Delivery} alt="delivery" />
                                <p>R$ 5,99</p>
                            </div>
                        </div>
                    </section>
                </li>

                <li className="homeListaRestaurantes-card online-cad">
                    <div className="homeListaRestaurantes-card-img">
                        <img src={Letrado} alt="logo" />
                    </div>

                    <section className="homeListaRestaurantes-card-text">
                        <div className="homeListaRestaurantes-card-text-1">
                            <h4 className="online">Hambúrgueria Tá na Mão Delivery</h4>
                        </div>
                        <div className="homeListaRestaurantes-card-text-2 text2-on">
                            <p>Hamburgueria</p>
                            <p>Jardim Atlântico</p>
                        </div>
                        <div className="homeListaRestaurantes-card-text-3">
                            <span className="empresa-on"><div></div> Aberto</span>
                            <div className="frete-gratis empresa-on2">
                                <img src={Delivery} alt="delivery" />
                                <p>R$ 5,99</p>
                            </div>
                        </div>
                    </section>
                </li>
                
            </ul>


            <footer className="homeFooter">
                <Link to='#'>
                    <HiHome size={22} />
                    <p>Início</p>
                </Link>

                <Link to='#'>
                    <RiFileList3Fill size={22} />
                    <p>Pedidos</p>
                </Link>

                <Link to='#'>
                    <HiUser size={22} />
                    <p>Perfil</p>
                </Link>
            </footer>

        </div>
    )
}

export default Home;