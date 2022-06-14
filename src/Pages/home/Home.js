import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BiWallet } from 'react-icons/bi';
import { BsChevronCompactDown } from 'react-icons/bs';
import { HiHome, HiUser } from 'react-icons/hi';
import { RiFileList3Fill, RiShoppingBag3Fill } from 'react-icons/ri';

import Letrado from '../../Imgs/logo_olho_hungger.png';
import Profile from '../../Imgs/profile.png';

//import Pizza from '../../Imgs/icons/pizza.gif';
import Delivery from '../../Imgs/icons/delivery.gif';

//<img src={Pizza} alt="pizza" />

import { Link } from 'react-router-dom'

function Home({ dadosCardapio }) {
    
    const carrinho = localStorage.getItem('@Hungger:carrinho');
    const restaurante = localStorage.getItem('@Hungger:delivery');
    const totalidade = localStorage.getItem('@Hungger:total')

    if(carrinho === undefined | carrinho === null) {
        localStorage.setItem('@Hungger:carrinho', JSON.stringify([]));
    }

    const deliverytanamao = {
        delivery: 'Delivery Tá na Mão',
        category: 'Lanches',
        bairro: 'Jaderlândia',
        minimo: 16.00,
        entrega: 7.00,
        fabrica: [40, 50],
        cardapio: [
            {
                title: 'Lanches',
                items: [
                    { id: 1, nome: 'Hambúrguer', desc: 'Pão, alface, tomate, carne, queijo, milho verde', price: 10},
                    { id: 2, nome: 'X-Calabresa', desc: 'Pão, carne, queijo, presunto, Calabresa, alface e tomate', price: 13}
                ]
            },
            {
                title: 'Bebidas',
                items: [
                    { id: 3, nome: 'Coca cola', desc: '', price: 8},
                    { id: 4, nome: 'Guaraná', desc: 'Legítima bebida brasileira', price: 9.00}
                ]
            }
        ]
    }

    const potebebel = {
        delivery: 'Potes Bebel',
        category: 'Doces & Bolos',
        bairro: 'Jardim Atlântico',
        minimo: 0.00,
        entrega: 0.00,
        fabrica: [20, 30],
        cardapio: [
            {
                title: 'Potes Doces',
                items: [
                    { id: 1, nome: 'Pote de Chocolate', desc: 'Delicioso pote de chocolate!', price: 5},
                    { id: 2, nome: 'Pote de Cupuaçú', desc: 'Delicioso pote de Cupuaçu!', price: 6}
                ]
            },
            {
                title: 'Tortas',
                items: [
                    { id: 3, nome: 'Torta salgada', desc: '', price: 8},
                    { id: 4, nome: 'Torta mole de Bri', desc: 'Essa torta é brabíssima!', price: 9}
                ]
            }
        ]
    }

    const navigate = useNavigate()

    const [menuUpDown, setMenuUpDown] = useState('off')

    function irRestaurant(e, items) {
        //
        setTimeout(() => {
            dadosCardapio(items);
            navigate(`delivery/${e}`);            
        }, 1000)
    }

    const username = localStorage.getItem('@Hungger:username');

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
                    <h1>{ username }</h1>
                </div>
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

                <li onClick={e => irRestaurant('gfgfdg5ygfhgfh', deliverytanamao)} className="homeListaRestaurantes-card online-cad">
                    <div className="homeListaRestaurantes-card-img">
                        <img src={Profile} alt="logo" />
                    </div>

                    <section className="homeListaRestaurantes-card-text">
                        <div className="homeListaRestaurantes-card-text-1">
                            <h4 className="online">Hambúrgueria Tá na mão</h4>
                        </div>
                        <div className="homeListaRestaurantes-card-text-2 text2-on">
                            <p>Hamburgueria</p>
                            <p>Jarderlândia</p>
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

                <li onClick={e => irRestaurant('gfgfdg5ygfhgfh', potebebel)} className="homeListaRestaurantes-card online-cad">
                    <div className="homeListaRestaurantes-card-img">
                        <img src={Letrado} alt="logo" />
                    </div>

                    <section className="homeListaRestaurantes-card-text">
                        <div className="homeListaRestaurantes-card-text-1">
                            <h4 className="online">Potes Bebel</h4>
                        </div>
                        <div className="homeListaRestaurantes-card-text-2 text2-on">
                            <p>Doces & Bolos</p>
                            <p>Jardim Atlântico</p>
                        </div>
                        <div className="homeListaRestaurantes-card-text-3">
                            <span className="empresa-on"><div></div> Aberto</span>
                            <div className="frete-gratis empresa-on2">
                                <img src={Delivery} alt="delivery" />
                                <p>GRÁTIS</p>
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
                
            </ul>


            <footer className="homeFooter">
                {restaurante === null | restaurante === ''
                | restaurante === undefined | carrinho === undefined | carrinho === null | carrinho.length === 0 ?
                <></>
                :
                <section className="homeFooter-sacola">
                    <button onClick={e => navigate('/app/sacola')}>
                        <RiShoppingBag3Fill size={22} />
                        <h2>Ver sacola</h2>
                        <h3>
                        { new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                            }).format(totalidade)
                        }
                        </h3>
                    </button>
                </section>
                }
                
                <section className="homeFooter-menus">
                    <Link to='#' className="active-menu">
                        <HiHome size={22} />
                        <p>Início</p>
                    </Link>

                    <Link to='pedidos' className="desative-menu">
                        <RiFileList3Fill size={22} />
                        <p>Pedidos</p>
                    </Link>

                    <Link to='perfil' className="desative-menu">
                        <HiUser size={22} />
                        <p>Perfil</p>
                    </Link>
                </section>
            </footer>

        </div>
    )
}

export default Home;