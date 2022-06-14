import React from "react";

import { AiOutlineEnvironment } from 'react-icons/ai';
import { HiHome, HiUser } from 'react-icons/hi';
import { RiFileList3Fill } from 'react-icons/ri';

import { Link, useNavigate } from 'react-router-dom'

function Enderecos() {

    const naviagate = useNavigate();

    function irMenu() {
        console.log('SECTION')
    }

    function atualizarEndereco(e) {
        naviagate('atualizar/65rgdfgfdo09k-df-')
    }

    function deletarEndereco(e) {
        console.log('DELETAR')
    }

    return (
        <div id="root-home">

            <section className="space15pad"></section>

            <section className="enderecosBtnCadNovo">
                <Link to="/app/enderecos/novo"><AiOutlineEnvironment size={22} /> Novo endereço</Link>
            </section>

            <section className="enderecos">

                <section className="enderecos-content ">
                    <div onClick={e => irMenu()}>
                        <h2>Rua José Bonifácio Brasil, 692, Jardim Atlânctico, Paragominas-Pa</h2>
                        <p>Casa, Perto da Brasília Verde</p>
                    </div>
                    <section>
                        <button onClick={e => atualizarEndereco()}>Atualizar</button>
                        <button onClick={e => deletarEndereco()}>Apagar</button>
                    </section>
                </section>

                <section className="enderecos-content endereco-active">
                    <div onClick={e => irMenu()}>
                        <h2>Rua José Bonifácio Brasil, 692, Jardim Atlânctico, Paragominas-Pa</h2>
                        <p>Casa, Perto da Brasília Verde</p>
                    </div>
                    <section>
                        <button>Atualizar</button>
                        <button>Apagar</button>
                    </section>
                </section>

            </section>

            <footer className="homeFooter">
                <section className="homeFooter-menus">
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
                </section>
            </footer>  

        </div>
    )
}

export default Enderecos;