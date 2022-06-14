import React, { useState } from "react";

import { RiShoppingBag3Fill } from 'react-icons/ri';
import { HiArrowLeft } from 'react-icons/hi';

import Profile from '../../Imgs/profile.png';

import { Link, useNavigate } from 'react-router-dom'

function Cardapio({ dadosCad, enviaItem }) {

    const restaurantee = localStorage.getItem('@Hungger:delivery');
    const carrinho = localStorage.getItem('@Hungger:carrinho');
    const totalidade = localStorage.getItem('@Hungger:total')

    const [cardapio, setCardapio] = useState(dadosCad.cardapio ? dadosCad.cardapio : [])

    const cardapioTaNaMao = [
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

    if(cardapio.length === 0 | cardapio === undefined | cardapio === null) {
        setCardapio(cardapioTaNaMao);
    }

    const navigate = useNavigate();

    function verItem(e, data) {
        const mockItem = {
            delivery: dadosCad.delivery,
            entrega: dadosCad.entrega,
            tempo: dadosCad.fabrica,
            minimo: dadosCad.minimo,
            item: data
        }

        enviaItem(mockItem);
        navigate(e)
    }

    return (
        <div id="root-home">
            <section className="cardapio">
                
                <Link to='/app' className="verItemCloseCad">
                    <HiArrowLeft size={26} />
                </Link>

                <section className="cardapioHeader">
                    <h1>{ dadosCad.delivery ? dadosCad.delivery : 'Erro ao obter nome!!!' }<strong>Lanches - Jardim Atlântico</strong></h1>
                    <div className="homeListaRestaurantes-card-img">
                        <img src={Profile} alt="logo" />
                    </div>
                </section>

                <section className="cardapioPriceMin">
                    { dadosCad.minimo === 0 ?
                    <h2>Sem pedido mínimo</h2>
                    :
                    <h2>Pedido mínimo <strong>
                        { new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                            }).format(dadosCad.minimo)
                        }
                    </strong></h2>
                    }
                    
                </section>

                <section className="cardapioMain">

                    {cardapio.map(group => (
                    <section key={group.title} className="cardapioGroup">
                        <h2>{group.title}</h2>

                        {group.items.map(item => (
                        <div key={item.nome} onClick={e => verItem(`${item.id}`, item)}>
                            <h3>{item.nome}</h3>
                            <p>{item.desc}</p>
                            <strong>
                                { new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                    }).format(item.price)
                                }
                            </strong>
                        </div>
                        ))}
                        
                    </section>
                    ))}

                </section>

            </section>

            <footer className="homeFooter">
                {restaurantee === null | restaurantee === ''
                | restaurantee === undefined | carrinho === undefined | carrinho === null | carrinho.length === 0 ?
                <></>
                :
                <section className="homeFooter-sacola-res">
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
            </footer>

        </div>
    )
}

export default Cardapio;