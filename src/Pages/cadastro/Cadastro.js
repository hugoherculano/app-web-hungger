import React, { useState } from "react";
import API from '../../Service/Api'

import Letrado from '../../Imgs/letrado.png';
import Loadinf from '../../Imgs/carregando.gif';

import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

import { useNavigate } from 'react-router-dom';

function Cadastrar() {

    const navigate = useNavigate();   

    const [email, setEmail] = useState('');
    const [whats, setWhats] = useState('');
    const [whatsOrig, setWhatsOrig] = useState('');
    const [nome, setNome] = useState('');
    const [arroba, setArroba] = useState('');
    const [cpf, setCpf] = useState('');
    const [cpfOrig, setCpfOrig] = useState('');
    const [pass, setPass] = useState('');
    const [indica, setIndica] = useState('');

    const [carreg, setCarreg] = useState(false);
    const [erro, setErro] = useState(false);

    const [posi, setPosi] = useState(0);


    async function setarEmail(e) {
        e.preventDefault();
        setCarreg(true)
        setErro(false)

        try {

            await API.get(`/user/getemail/${email}`);

            setCarreg(false)
            setPosi(1);
        } catch(err) {
            setCarreg(false)
            setErro(true)
        }
    }


    async function setarWhats(e) {
        e.preventDefault();
        setCarreg(true)
        setErro(false)

        try {

            await API.get(`/user/getwhats/${whats}`);

            setCarreg(false)
            setPosi(2);
        } catch(err) {
            setCarreg(false)
            setErro(true)
        }
    }

    async function setarNome(e) {
        e.preventDefault();

        setPosi(3);
    }

    async function setarArroba(e) {
        e.preventDefault();
        setCarreg(true)
        setErro(false)

        try {

            await API.get(`/user/getuser/${arroba}`);

            setCarreg(false)
            setPosi(4);
        } catch(err) {
            setCarreg(false)
            setErro(true)
        }
    }

    async function setarCpf(e) {
        e.preventDefault();
        setCarreg(true)
        setErro(false)

        try {

            await API.get(`/user/getcpf/${cpf}`);

            setCarreg(false)
            setPosi(5);
        } catch(err) {
            setCarreg(false)
            setErro(true)
        }
    }

    async function setarPass(e) {
        e.preventDefault();

        setPosi(6);
    }

    async function setarIndicado(e) {
        e.preventDefault();
        setCarreg(true);
        setErro(false);

        if(!indica) {
            try {

                await API.post('/user/created', {
                    nome: nome.trim(),
                    pass,
                    email,
                    whats: whatsOrig,
                    user: arroba,
                    cpf: cpfOrig
                });

                navigate('sucesso');

            } catch (err) {
                setCarreg(false);
                setErro(true)
            }
            
        }

        if(indica) {
            try {

                await API.get(`/user/getindica/${indica}`);

                await API.post('/user/create', {
                    nome: nome.trim(),
                    pass,
                    email,
                    whats: whatsOrig,
                    user: arroba,
                    cpf: cpfOrig,
                    indi: indica
                });

                navigate('sucesso');
    
                setCarreg(false)
    
                //setPosi(5);
                
            } catch(err) {
                setCarreg(false)
                setErro(true)
            }
        }

    }

    function setarVoltar(e) {
        e.preventDefault();
        setErro(false)

        setPosi(posi - 1);
    }

    function whatsKey(e) {
        e.currentTarget.maxLength = 15;
        let value = e.currentTarget.value;
        value = value.replace(/\D/g, "");
        setWhatsOrig(value)
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        value = value.replace(/(\d)(\d{4})$/,"$1-$2");
        setWhats(value)
        e.currentTarget.value = value;
    }

    function configArroba(e) {
        let value = e.currentTarget.value;
        value = value.replace(/[^a-zA-Zs]/g, "");
        setArroba(value)
        e.currentTarget.value = value;
    }

    function inputCpf(e) {
        let value = e.currentTarget.value;
        value = value.replace(/[^\d]/g, "");
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        let numWhats = value.replace(/\D/g, "");
        setCpfOrig(numWhats);
        setCpf(value);
        e.currentTarget.value = value;
    }

    return (
        <>
            <div id="root-white">

                <div className="tela-cadastro">
                    <header>
                        <img src={Letrado} alt="logo-hungger" />
                    </header>

                    <section>
                        <main>
                            {posi === 0 ?
                            <>
                            <h2>Qual é o seu e-mail?</h2>
                            <div className="borda"></div>
                            <input
                            type="email"
                            onChange={e => setEmail(e.target.value.trim())}
                            value={email}
                            placeholder="seuemail@gmail.com"
                            />
                            {erro ?
                            <span>Este e-mail já está sendo usado! :/</span>
                            :
                            <>
                            </>
                            }
                            </>
                            :
                            posi === 1 ?
                            <>
                            <h2>Qual é o seu WhatsApp?</h2>
                            <div className="borda"></div>
                            <input
                            type="tel"
                            onChange={(e) => whatsKey(e)}
                            value={whats}
                            maxLength={15}
                            placeholder="(91) 98888-8888"
                            />
                            {erro ?
                            <span>Este WhatsApp já está sendo usado! :/</span>
                            :
                            <>
                            </>
                            }
                            </>
                            :
                            posi === 2 ?
                            <>
                            <h2>Qual é o seu nome completo?</h2>
                            <div className="borda"></div>
                            <input
                            type="text"
                            onChange={e => setNome(e.target.value)}
                            value={nome}
                            placeholder="Ana Clara Felipina"
                            />
                            {erro ?
                            <span>Erro no campo do seu nome! :/</span>
                            :
                            <>
                            </>
                            }
                            </>
                            :
                            posi === 3 ?
                            <>
                            <h2>Escolha um nome de usuário</h2>
                            <div className="borda"></div>
                            <input
                            type="text"
                            onChange={e => configArroba(e)}
                            value={arroba}
                            placeholder="@anaclara"
                            />
                            {erro ?
                            <span>Este nome de usuário já está em uso! :/</span>
                            :
                            <>
                            </>
                            }
                            </>
                            :
                            posi === 4 ?
                            <>
                            <h2>Informe seu CPF:</h2>
                            <div className="borda"></div>
                            <input
                            type="text"
                            onChange={e => inputCpf(e)}
                            value={cpf}
                            maxLength={14}
                            placeholder="000.000.000-00"
                            />
                            {erro ?
                            <span>Este CPF já está cadastrado! :/</span>
                            :
                            <>
                            </>
                            }
                            </>
                            :
                            posi === 5 ?
                            <>
                            <h2>Escolha uma senha de login:</h2>
                            <div className="borda"></div>
                            <input
                            type="password"
                            onChange={e => setPass(e.target.value.trim())}
                            value={pass}
                            placeholder="*******"
                            />
                            </>
                            :
                            posi === 6 ?
                            <>
                            <h2>Alguém indicou você? (Opcional)</h2>
                            <div className="borda"></div>
                            <input
                            type="text"
                            onChange={e => setIndica(e.target.value.trim())}
                            value={indica}
                            placeholder="@hungger"
                            />
                            {erro ?
                            <span>Não existe este usuário! :/</span>
                            :
                            <>
                            </>
                            }
                            </>
                            :
                            <>
                            </>
                            }
                            

                            <div className="borda"></div>
                            <p>Ao continuar, você concorda em receber e-mails, inclusive automáticos, da Hungger, no e-mail informado.</p>
                                                        
                        </main>


                        {posi === 0 ?
                        <footer>
                            {email ?
                            <div className="pai-btns-cadastro">
                                <button></button>
                                <button className="btn-cadastro" onClick={ e => setarEmail(e) }>
                                    {carreg ?
                                    <img src={Loadinf} alt="loading-hungger" />
                                    :
                                    <>
                                    Avançar
                                    <HiArrowRight size={26} />
                                    </>
                                    }
                                    
                                </button>
                            </div>
                            :
                            <div className="pai-btns-cadastro">
                                <button></button>
                                <button className="btn-cadastro" disabled>
                                    Avançar
                                    <HiArrowRight size={26} />
                                </button>
                            </div>
                            }
                            <div className="borda"></div>
                            <p>Este site é protegido pelo reCAPTCHA e segue a Política de Privacidade e os Termos de Uso do Google.</p>
                        </footer>
                        :
                        posi === 1 ?
                        <footer>
                            {whats ?
                            <div className="pai-btns-cadastro">
                                <button className="btn-cadastro-volt"
                                onClick={ e => setarVoltar(e) }>
                                    <HiArrowLeft size={26} />
                                </button>

                                <button className="btn-cadastro" onClick={ e => setarWhats(e) }>
                                    Avançar
                                    <HiArrowRight size={22} />
                                </button>
                            </div>
                            :
                            <div className="pai-btns-cadastro">
                                <button className="btn-cadastro-volt"
                                onClick={ e => setarVoltar(e) }>
                                    <HiArrowLeft size={26} />
                                </button>

                                <button className="btn-cadastro" disabled>
                                    Avançar
                                    <HiArrowRight size={22} />
                                </button>
                            </div>
                            }
                            <div className="borda"></div>
                            <p>Este site é protegido pelo reCAPTCHA e segue a Política de Privacidade e os Termos de Uso do Google.</p>
                        </footer>
                        :
                        posi === 2 ?
                        <footer>
                            {nome ?
                            <div className="pai-btns-cadastro">
                                <button className="btn-cadastro-volt"
                                onClick={ e => setarVoltar(e) }>
                                    <HiArrowLeft size={26} />
                                </button>

                                <button className="btn-cadastro" onClick={ e => setarNome(e) }>
                                    Avançar
                                    <HiArrowRight size={22} />
                                </button>
                            </div>
                            :
                            <div className="pai-btns-cadastro">

                                <button className="btn-cadastro-volt"
                                onClick={ e => setarVoltar(e) }>
                                    <HiArrowLeft size={26} />
                                </button>

                                <button className="btn-cadastro" disabled>
                                    Avançar
                                    <HiArrowRight size={22} />
                                </button>
                            </div>
                            }
                            <div className="borda"></div>
                            <p>Este site é protegido pelo reCAPTCHA e segue a Política de Privacidade e os Termos de Uso do Google.</p>
                        </footer>
                        :
                        posi === 3 ?
                        <footer>
                            {arroba ?
                            <div className="pai-btns-cadastro">

                                <button className="btn-cadastro-volt"
                                onClick={ e => setarVoltar(e) }>
                                    <HiArrowLeft size={26} />
                                </button>

                                <button className="btn-cadastro"
                                onClick={ e => setarArroba(e) }>
                                    Avançar
                                    <HiArrowRight size={26} />
                                </button>

                            </div>                            
                            :
                            <div className="pai-btns-cadastro">
                                <button className="btn-cadastro-volt"
                                onClick={ e => setarVoltar(e) }>
                                    <HiArrowLeft size={26} />
                                </button>
                                <button className="btn-cadastro" disabled>
                                    Avançar
                                    <HiArrowRight size={26} />
                                </button>
                            </div>
                            }
                            <div className="borda"></div>
                            <p>Este site é protegido pelo reCAPTCHA e segue a Política de Privacidade e os Termos de Uso do Google.</p>
                        </footer>
                        :
                        posi === 4 ?
                        <footer>
                            {cpf ?
                            <div className="pai-btns-cadastro">

                                <button className="btn-cadastro-volt"
                                onClick={ e => setarVoltar(e) }>
                                    <HiArrowLeft size={26} />
                                </button>

                                <button className="btn-cadastro"
                                onClick={ e => setarCpf(e) }>
                                    Avançar
                                    <HiArrowRight size={26} />
                                </button>

                            </div>                            
                            :
                            <div className="pai-btns-cadastro">
                                <button className="btn-cadastro-volt"
                                onClick={ e => setarVoltar(e) }>
                                    <HiArrowLeft size={26} />
                                </button>
                                <button className="btn-cadastro" disabled>
                                    Avançar
                                    <HiArrowRight size={26} />
                                </button>
                            </div>
                            }
                            <div className="borda"></div>
                            <p>Este site é protegido pelo reCAPTCHA e segue a Política de Privacidade e os Termos de Uso do Google.</p>
                        </footer>
                        :
                        posi === 5 ?
                        <footer>
                            {pass ?
                            <div className="pai-btns-cadastro">

                                <button className="btn-cadastro-volt"
                                onClick={ e => setarVoltar(e) }>
                                    <HiArrowLeft size={26} />
                                </button>

                                <button className="btn-cadastro"
                                onClick={ e => setarPass(e) }>
                                    Avançar
                                    <HiArrowRight size={26} />
                                </button>

                            </div>                            
                            :
                            <div className="pai-btns-cadastro">
                                <button className="btn-cadastro-volt"
                                onClick={ e => setarVoltar(e) }>
                                    <HiArrowLeft size={26} />
                                </button>
                                <button className="btn-cadastro" disabled>
                                    Avançar
                                    <HiArrowRight size={26} />
                                </button>
                            </div>
                            }
                            <div className="borda"></div>
                            <p>Este site é protegido pelo reCAPTCHA e segue a Política de Privacidade e os Termos de Uso do Google.</p>
                        </footer>
                        :
                        posi === 6 ?
                        <footer>
                            <div className="pai-btns-cadastro">

                                <button className="btn-cadastro-volt"
                                onClick={ e => setarVoltar(e) }>
                                    <HiArrowLeft size={26} />
                                </button>

                                <button className="btn-cadastro"
                                onClick={ e => setarIndicado(e) }>
                                    Finalizar
                                    <HiArrowRight size={26} />
                                </button>

                            </div>

                            <div className="borda"></div>
                            <p>Este site é protegido pelo reCAPTCHA e segue a Política de Privacidade e os Termos de Uso do Google.</p>
                        </footer>
                        :
                        <>
                        </>
                        }
                        
                    </section>                    
                </div>
            </div>
        </>
    )
}

export default Cadastrar;