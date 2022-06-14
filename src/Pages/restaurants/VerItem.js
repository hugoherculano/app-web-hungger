import React, { useState } from "react";

import { MdSportsMotorsports } from 'react-icons/md';
import { HiArrowLeft } from 'react-icons/hi';
import { BiStore } from 'react-icons/bi';
import { BsPlusLg, BsDashLg } from 'react-icons/bs';

import { Link, useNavigate } from 'react-router-dom'

function VerItem({ dadosItem }) {

    const naviagate = useNavigate();

    let sacola = JSON.parse(localStorage.getItem('@Hungger:carrinho'));

    const valorItemOrig = dadosItem.item.price;
    
    const [qtd, setQtd] = useState(1);
    const [valorItem, setValorItem] = useState(valorItemOrig);

    let novosItem = {};    

    function addQtdItem() {
        const novaQtd = qtd + 1;

        setQtd(novaQtd)
        setValorItem(novaQtd * valorItemOrig)
    }

    function subQtdItem() {
        const novaQtd = qtd - 1;

        setQtd(novaQtd)
        setValorItem(novaQtd * valorItemOrig)
    }

    function adicionarItem() {

        const restaurante = localStorage.getItem('@Hungger:delivery');
        //const minimo = localStorage.setItem('@Hungger:minimo', dadosItem.minimo);

        if(restaurante !== dadosItem.delivery) {
            
            localStorage.setItem('@Hungger:carrinho', JSON.stringify([]));
            localStorage.setItem('@Hungger:delivery', '')

            const djdsjd = {
                nome: dadosItem.item.nome,
                price: dadosItem.item.price,
                qtd,
                id: dadosItem.item.id
            }
    
            const fdfdfsfd = [djdsjd]
    
            localStorage.setItem('@Hungger:carrinho', JSON.stringify(fdfdfsfd));
            localStorage.setItem('@Hungger:delivery', dadosItem.delivery)
            localStorage.setItem('@Hungger:entrega', dadosItem.entrega)
    
            naviagate('/app/sacola')

            return;
        }

        sacola.forEach((element, index) => {

            if(element.id === dadosItem.item.id) {
                novosItem = { cont: element, pos: index}
            }

        });

        if('cont' in novosItem) {

            sacola.splice(novosItem.pos, 1, {
                nome: dadosItem.item.nome,
                price: dadosItem.item.price,
                qtd: qtd + novosItem.cont.qtd,
                id: dadosItem.item.id
            });

            localStorage.setItem('@Hungger:carrinho', JSON.stringify(sacola));
            localStorage.setItem('@Hungger:entrega', dadosItem.entrega)
    
            naviagate('/app/sacola');

            return;
        }
        

        //const elementIdentico = sacola.filter(item => (item.id === dadosItem.item.id));

        //if(elementIdentico.length > 0) {
          //  console.log(elementIdentico, 'P');
          //  console.log(novosItem, 'J');
        //}
        

        //sacola.map((item, index) => {
          //  console.log(item, index)
        //});

        const novoItem = {
            nome: dadosItem.item.nome,
            price: dadosItem.item.price,
            qtd,
            id: dadosItem.item.id
        }

        const somaTudo = [...sacola, novoItem]

        localStorage.setItem('@Hungger:entrega', dadosItem.entrega)
        localStorage.setItem('@Hungger:carrinho', JSON.stringify(somaTudo));
        localStorage.setItem('@Hungger:delivery', dadosItem.delivery)

        naviagate('/app/sacola')

        //setSacolaResume([...sacola, { gjhfd: 'fgfdgfg'}]);

    }

    return (
        <div id="root-home">

            <section className="verItem">

                <Link to='/app/delivery/gfgfdg5ygfhgfhe' className="verItemClose">
                    <HiArrowLeft size={26} />
                </Link>
                
                <section className="verItemHeader">
                    <h1>{ dadosItem.item.nome }</h1>
                    <p>{ dadosItem.item.desc }</p>

                    <strong>
                        { new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                            }).format(valorItemOrig)
                        }
                    </strong>
                </section>

                <section className="verItemMeio">

                    <div>
                        <BiStore size={20} />
                        <h2>{ dadosItem.delivery }</h2>
                    </div>

                    <div>
                        <MdSportsMotorsports size={20} />
                        <p>{ `${dadosItem.tempo[0]}-${dadosItem.tempo[1]} min | ` }
                        {dadosItem.entrega !== 0 ?
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                            }).format(dadosItem.entrega)
                            :
                            'Entrega Grátis'
                        }</p>
                    </div>

                </section>


                <section className="verItemAddItem">

                    <div className="verItemAddItem-div">
                        {qtd < 2 ?
                        <button disabled><BsDashLg size={12} /></button>
                        :
                        <button onClick={e => subQtdItem()}><BsDashLg size={12} /></button>
                        }
                        <p>{ qtd }</p>
                        <button onClick={e => addQtdItem()}><BsPlusLg size={12} /></button>
                    </div>

                    <div>
                        <button onClick={e => adicionarItem()} className="verItemAddItem-btn">
                            <p>Adicionar</p>
                            <p>
                                { new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                    }).format(valorItem)
                                }
                            </p>
                        </button>
                    </div>

                </section>

            </section>

        </div>
    )
}

export default VerItem;