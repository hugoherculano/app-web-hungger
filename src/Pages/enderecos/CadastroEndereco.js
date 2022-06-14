import React from "react";

import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { HiHome, HiUser } from 'react-icons/hi';
import { RiFileList3Fill } from 'react-icons/ri';

import { Link } from 'react-router-dom'

function CadastroEndereco() {

    return (
        <div id="root-home">

            <section className="space15pad"></section>

            <section className="cadastroEndereco">

                <span><AiOutlineExclamationCircle size={20} />Erro ao salvar endereço</span>

                <article>
                    <p>Nome da Rua ou Avenida:</p>
                    <input
                    placeholder="Ex: Rua São Tomé"
                    />
                </article>

                <article>
                    <p>Nome do bairro:</p>
                    <input
                    placeholder="Ex: Jardim Atlântico"
                    />
                </article>

                <section>
                    
                    <div>
                        <p>Complemento:</p>
                        <input
                        placeholder="Apto/Bloco/Casa"
                        />
                    </div>
                    
                    <div>
                        <p>Número:</p>
                        <input
                        type="number"
                        placeholder="Ex: 459"
                        />
                    </div>

                </section>

                <article>
                    <p>Ponto de referência:</p>
                    <input
                    placeholder="Ex: Ao lado da Loja Magazine"
                    />
                </article>

                <button type="submit" disabled>Salvar endereço</button>

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

export default CadastroEndereco;