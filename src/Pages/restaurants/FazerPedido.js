import React, { useState, useEffect } from "react";


import { BsCreditCardFill, BsXDiamondFill, BsCash } from 'react-icons/bs';

import { Link, useNavigate } from 'react-router-dom'

import Torta from '../../Imgs/icons/torta.gif';

function FazerPedido() {

    const navigate = useNavigate(); 

    const delivery = localStorage.getItem('@Hungger:delivery');
    let sacola = JSON.parse(localStorage.getItem('@Hungger:carrinho'));
    const entrega = Number(localStorage.getItem('@Hungger:entrega'));

    const [revisao, setRevisao] = useState(false)

    useEffect(() => {

        if(delivery === '' | delivery === undefined | delivery === null) {
            navigate('/app')
        }

    }, [delivery, navigate])

    const [pagamento, setPagamento] = useState({})
    const [alterarFormaPagamento, setAlterarFormaPagamento] = useState(false)
    const [troco, setTroco] = useState(0)
    const [trocoPres, setTrocoPres] = useState(false)

    const endereco = {
        rua: 'Rua Monte Alegre',
        num: 490,
        bai: 'Jardim Nova Conquista'
    }

    const pags = [
        { slug: 'credito' },
        { slug: 'debito' },
        { slug: 'pix' },
        { slug: 'dinheiro' }
    ];


    const minimo = localStorage.getItem('@Hungger:minimo');

    function fazerPedido() {

        console.log('Finalizei Carrinho!')
        setRevisao(true)

        setTimeout(() => {

            localStorage.setItem('@Hungger:carrinho', JSON.stringify([]));
            localStorage.setItem('@Hungger:delivery', '');
            localStorage.setItem('@Hungger:total', 0)

            setRevisao(false)
            navigate(`/app/pedidos/${'53291932310321223'}`);

        }, 3000)

    }


    function formaPagamento(e) {

        setTroco(0);
        
        if(e !== 'Dinheiro') {
            setPagamento({ forma: e });
            setAlterarFormaPagamento(false);
        }
        

        if(e === 'Dinheiro') {
            setPagamento({ forma: e });
            setTrocoPres(true)
        }
    }

    function trocoFazParte(troco) {

        if(troco !== 0) {
            setTroco(troco)
        } else {
            setTroco(0)
        }

        setTrocoPres(false)
        setAlterarFormaPagamento(false)
    }

    function controllPreco(e) {
        let value = e.currentTarget.value;
        value = value.replace(/\D/g, "");
        let forbank = value.replace(/(\d)(\d{2})$/, "$1.$2");
        setTroco(forbank);
        value = value.replace(/(\d)(\d{2})$/, "$1,$2");
        value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
        e.currentTarget.value = `R$ ${value}`;
    }
    

    const totalidade = sacola.reduce((acumulador, numero) => {

        return acumulador += (numero.price * numero.qtd);

    }, 0);

    localStorage.setItem('@Hungger:total', totalidade)

    return (
        
        <div id="root-home">

            {alterarFormaPagamento ?
            <section className="verItem">

                <section className="escolhapagamento">
                    
                    <h2>
                        Atenção para a forma de pagamento selecionada.
                        Você não poderá utilizar outra nessa entrega.
                    </h2>

                    {trocoPres ?
                    <section className="trocoPedido">

                        <h4>Troco pra quanto?</h4>
                        <p>Digite quanto vai pagar em dinheiro para que o entregador leve o troco.</p>

                        <input type='text'
                        onKeyUp={e => { controllPreco(e) }}
                        placeholder="Ex: R$ 50,00"
                        />

                        {troco > (totalidade+entrega) ?
                        <button onClick={e => trocoFazParte(troco)}>Confirmar</button>
                        :
                        <button disabled>Confirmar</button>
                        }

                        <h3 onClick={e => trocoFazParte(0)}>Não quero troco</h3>

                    </section>
                    :
                    <>
                    {
                    pags.map(pag => (
                        <div key={pag.slug}
                        onClick={e => formaPagamento(
                            pag.slug === 'debito' ? 'Cartão de débito' :
                            pag.slug === 'credito' ? 'Cartão de crédito' :
                            pag.slug === 'dinheiro' ? 'Dinheiro' : 'Pix'
                        )}>
                            {
                            pag.slug === 'pix' ?
                            <>
                                <BsXDiamondFill size={22} />
                                <p>Pix</p>
                            </>
                            :
                            pag.slug === 'credito' ?
                            <>
                                <BsCreditCardFill size={22} />
                                <p>Cartão de crédito</p>
                            </>
                            :
                            pag.slug === 'dinheiro' ?
                            <>
                                <BsCash size={22} />
                                <p>Dinheiro</p>
                            </>
                            :
                            <>
                                <BsCreditCardFill size={22} />
                                <p>Cartão de débito</p>
                            </>
                            }
                            
                        </div>
                        ))
                        }
                    </>
                    }

                </section>

            </section>
            :
            <>
            <section className="verItem">

                <section className="fazerpedido-horas">
                    <h2>Hoje, {`${'43'} - ${'53'} min`}</h2>
                </section>

                <section className="sacolaHeader">

                    <div>
                        <h2>{ delivery }</h2>
                    </div>

                    <div>
                        <Link to={'/app/delivery/gfgfdg5ygfhgfhe'}>Ver cardápio</Link>
                    </div>

                </section>

                <section className="fazerpedido-pag">
                    <h2>Forma de pagamento</h2>

                    {'forma' in pagamento ?
                    <section>
                        <div>

                            {
                            pagamento.forma === 'Cartão de débito' ? <BsCreditCardFill size={20} /> :
                            pagamento.forma === 'Cartão de crédito' ? <BsCreditCardFill size={20} /> :
                            pagamento.forma === 'Dinheiro' ? <BsCash size={20} /> : <BsXDiamondFill size={20} />
                            }
                            

                            <p>
                                { pagamento.forma } <strong>{ troco !== 0 ?
                                `Troco para ${
                                    new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                }).format(troco)}` : ''} </strong>
                            </p>

                        </div>
                        <button onClick={e => setAlterarFormaPagamento(true)}>Trocar</button>
                    </section>
                    :
                    <section>
                        <div>
                            <p>Formas de pagamento</p>
                        </div>
                        <button onClick={e => setAlterarFormaPagamento(true)}>Escolher</button>
                    </section>
                    }
                    
                </section>

            </section>

            {'rua' in endereco ?
            <section className="fazerpedido-endereco">
                <div>
                    <h3>Entregar em</h3>
                    <h2>Rua José Bonifácio Brasil, 890</h2>
                    <p>Casa, Perto da Brasília Verde</p>

                    <Link to='/app/enderecos'>Alterar</Link>
                </div>
            </section>
            :
            <section className="fazerpedido-endereco">
                <div>
                    <h3>Não encontramos nenhum endereço cadastrado</h3>

                    <Link to='/app/enderecos'>Adicionar endereço</Link>
                </div>
            </section>
            }

            <section className="fazerpedido-resume">
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

            <section> .
            </section>

            <footer className="homeFooter">

                <section className="homeFooter-sacola-cont">
                    {totalidade >= minimo && 'rua' in endereco && 'forma' in pagamento ?
                    <button onClick={e => fazerPedido()}>Fazer pedido</button>
                    :
                    <button disabled>Fazer pedido</button>
                    }
                </section>

            </footer>

            </>
            }


            {revisao ?
            <section className="revisao">

                <div>
                    <img src={Torta} alt="Revisando seu pedido" />
                </div>

                <section>
                    <h2>Nesse momento estamos confirmando seu pedido...</h2>
                    <h3>Por favor, aguarde!</h3>
                </section>

                <p>Logo mais seu pedido será enviado para a cozinha</p>
            </section>
            :
            <></>
            }

        </div>
    )
}

export default FazerPedido;