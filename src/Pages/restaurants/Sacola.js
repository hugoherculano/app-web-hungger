import React, { useState, useEffect } from "react";

import { BiChevronDown } from 'react-icons/bi';
import { BsPlusLg, BsDashLg } from 'react-icons/bs';

import { Link, useNavigate } from 'react-router-dom'

function Sacola() {

    const navigate = useNavigate();  

    const delivery = localStorage.getItem('@Hungger:delivery');
    let sacola = JSON.parse(localStorage.getItem('@Hungger:carrinho'));
    const entrega = Number(localStorage.getItem('@Hungger:entrega'));


    const [items, setItems] = useState(sacola ? sacola : []);
    const [item, setItem] = useState({})  

    const [qtd, setQtd] = useState(0);
    const [valorItem, setValorItem] = useState(1);

    useEffect(() => {
        
        if(delivery === '' | delivery === undefined | delivery === null) {
            navigate('/app')
        }

    }, [delivery, navigate])

    function addQtdItem() {
        const novaQtd = qtd + 1;

        setQtd(novaQtd)
        setValorItem(novaQtd * item.item.price)
    }

    function subQtdItem() {
        const novaQtd = qtd - 1;

        setQtd(novaQtd)
        setValorItem(novaQtd * item.item.price)
    }

    function adicionarItem() {

        if(qtd === 0) {
            sacola.splice(item.index, 1);

            localStorage.setItem('@Hungger:carrinho', JSON.stringify(sacola));
            setItems(sacola)
            setItemExibido(false)
        }

        if(sacola.length === 0) {
            localStorage.setItem('@Hungger:carrinho', JSON.stringify([]));
            localStorage.setItem('@Hungger:delivery', '');
    
            navigate('/app')
        }

        if(qtd > 0) {

            sacola.splice(item.index, 1, {
                nome: item.item.nome,
                price: item.item.price,
                qtd: qtd,
                id: item.item.id
            });

            localStorage.setItem('@Hungger:carrinho', JSON.stringify(sacola));
            setItems(sacola)
            setItemExibido(false)
        }

        //setSacolaResume([...sacola, { gjhfd: 'fgfdgfg'}]);

    }



    const [abreCheck, setAbreCheck] = useState(false)

    const [itemExibido, setItemExibido] = useState(false)


    const minimo = localStorage.getItem('@Hungger:minimo');

    function limpaSacola() {
        localStorage.setItem('@Hungger:carrinho', JSON.stringify([]));
        localStorage.setItem('@Hungger:delivery', '');
        localStorage.setItem('@Hungger:total', 0)

        navigate('/app')

        return;
    }

    function exibirItem(e, index) {
        setAbreCheck(false)
        setItem({ item: e, index: index})
        setItemExibido(true)
        setValorItem(e.qtd * e.price)
        setQtd(e.qtd)
    }

    function continuar() {

        console.log('Estou indo...')
        navigate('pedido')
    }


    const totalidade = sacola.reduce((acumulador, numero) => {

        return acumulador += (numero.price * numero.qtd);

    }, 0);

    localStorage.setItem('@Hungger:total', totalidade)

    return (
        <div id="root-home">

            <section className="verItem">

                <section className="sacolaBarra">
                    <button onClick={e => limpaSacola()}>Limpar</button>
                </section>

                <section className="sacolaHeader">

                    <div>
                        <h2>{ delivery }</h2>
                    </div>

                    <div>
                        <Link to={'/app/delivery/gfgfdg5ygfhgfhe'}>Ver cardápio</Link>
                    </div>

                </section>

                {totalidade >= minimo ?
                <></>
                :
                <section className="sacolaAviso">
                    <p>{`O pedido mínimo desse restaurante é de ${new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(minimo)}, sem contar com a taxa de entrega.`}</p>
                </section>
                }
                
                {items.map((item, index) => (
                    <section onClick={e => exibirItem(item, index)}
                    key={`${item.id}${Date.now()}`} className="sacolaItem">

                        <h1>{ item.nome }</h1>

                        <strong>
                            { new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                                }).format(item.price * item.qtd)
                            }
                        </strong>

                    </section>
                ))}

                <section className="sacolaAddMais">
                    <Link to={'/app/delivery/gfgfdg5ygfhgfhe'}>Adicionar mais itens</Link>
                </section>

            </section>

            <footer className="homeFooter">

                <section onClick={e => setAbreCheck(true)} className="homeFooter-total">

                    <div>
                        <p>Total com a entrega</p>
                    </div>

                    <div>

                        <p>
                        { new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                            }).format(totalidade + entrega)
                        }
                        </p>

                        <BiChevronDown size={20} />

                    </div>
                    
                </section>

                <section className="homeFooter-sacola-cont">
                    {totalidade >= minimo ?
                    <button onClick={e => continuar()}>Continuar</button>
                    :
                    <button disabled>Continuar</button>
                    }
                </section>
            </footer>

            {abreCheck ? 
            <section className="caixaFlutuanteSacola">
                <div>
                    <h4 onClick={e => setAbreCheck(false)}><BiChevronDown size={25} /></h4>
                </div>
                <section className="caixaFlutuanteSacola-cont">
                    <h2>Resumo de valores</h2>
                    <h3>Subtotal
                        <strong>

                        { new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                            }).format(totalidade)
                        }

                        </strong>
                    </h3>

                    <p>Taxa de entrega {entrega > 0 ?
                    <strong>
                        { new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                            }).format(entrega)
                        }
                    </strong>
                    :
                    <span>GRÁTIS</span>
                    }
                    </p>
                    <h3>Total <strong>
                        { entrega < 1 ?
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(totalidade)
                        :
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(totalidade + entrega)
                        }
                        </strong>
                    </h3>
                </section>
            </section>
            :
            <></>
            }

            {itemExibido ? 
            <section className="caixaFlutuanteSacola">
                <div>
                    <h4 onClick={e => setItemExibido(false)}><BiChevronDown size={25} /></h4>
                </div>
                <section className="caixaFlutuanteSacola-item">

                    <section className="caixaFlutuanteSacola-item-h2">
                        <h2>{ item.item.nome }</h2>
                    </section>

                    <section className="verItemAddItem">

                        <div className="verItemAddItem-div">
                            {qtd < 1 ?
                            <button disabled><BsDashLg size={12} /></button>
                            :
                            <button onClick={e => subQtdItem()}><BsDashLg size={12} /></button>
                            }
                            <p>{ qtd }</p>
                            <button onClick={e => addQtdItem()}><BsPlusLg size={12} /></button>
                        </div>

                        <div>
                        {qtd === item.item.qtd ?
                            <button disabled className="verItemAddItem-btn">
                                {qtd === 0 ?
                                <>
                                    <p></p>
                                    <p>Remover</p>
                                    <p></p>
                                </>
                                :
                                <>
                                    <p>Atualizar</p>
                                    <p>
                                        { new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                            }).format(valorItem)
                                        }
                                    </p>
                                </>
                                }
                            </button>
                        :
                            <button onClick={e => adicionarItem()} className="verItemAddItem-btn">
                                {qtd === 0 ?
                                <>
                                    <p></p>
                                    <p>Remover</p>
                                    <p></p>
                                </>
                                :
                                <>
                                    <p>Atualizar</p>
                                    <p>
                                        { new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                            }).format(valorItem)
                                        }
                                    </p>
                                </>
                                }
                            </button>
                        }
                        </div>

                    </section>

                </section>
            </section>
            :
            <></>
            }

        </div>
    )
}

export default Sacola;