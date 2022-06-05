import React, { useState } from "react";
import API from '../../Service/Api'

import Letrado from '../../Imgs/letrado.png';
import Loadinf from '../../Imgs/carregando.gif';

import { HiArrowRight } from 'react-icons/hi';

import { useNavigate, Link } from 'react-router-dom';

function Login({ updateUserId }) {

    const navigate = useNavigate();   

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [carreg, setCarreg] = useState(false);
    const [erro, setErro] = useState(false);


    async function loginUser(e) {
        e.preventDefault();
        setErro(false)
        setCarreg(true);

        try {

            const res = await API.post('/user/logar', {
                email,
                pass
            });

            const { data } = res;

            localStorage.clear();
            
            function persistenciaData() {
                localStorage.setItem('@Hungger:user', data.codUser);
                localStorage.setItem('@Hungger:username', data.user);
            }

            await persistenciaData();

            await setTimeout(() => {
                updateUserId(data.codUser);
                setCarreg(false);
                navigate('/app');
            }, 3000)

            
            //localStorage.setItem('@Listteiro:nam', nome);
            //const port = localStorage.getItem('@Listteiro:nam');
            //setSuccessCreate(port);

        } catch (err) {
            setCarreg(false);
            setErro(true)
        }
    }

    return (
        <>
            <div id="root-white">

                <div className="tela-cadastro">
                    <header>
                        <Link to={'/'}>
                            <img src={Letrado} alt="logo-hungger" />
                        </Link>
                    </header>

                    <section>
                        <main>
                            <h2>Digite seu e-mail e senha para entrar</h2>
                            <div className="borda"></div>

                            <input
                            type="email"
                            onChange={e => setEmail(e.target.value.trim())}
                            value={email}
                            placeholder="seuemail@gmail.com"
                            />

                            <div className="borda"></div>

                            <input
                            type="password"
                            onChange={e => setPass(e.target.value.trim())}
                            value={pass}
                            placeholder="*******"
                            />

                            {erro ?
                            <span>A sua senha ou e-mail está incorreto! :/</span>
                            :
                            <>
                            </>
                            }                        

                            <div className="borda"></div>
                                                
                        </main>

                        <footer>
                            {email && pass ?
                            <div className="pai-btns-cadastro">
                                

                                {carreg ?
                                <>
                                <button></button>
                                <button className="btn-cadastro">
                                    <img src={Loadinf} alt="loading-hungger" />
                                </button>
                                </>
                                :
                                <>
                                <button></button>
                                <button className="btn-cadastro" onClick={ e => loginUser(e) }>
                                    Logar
                                    <HiArrowRight size={26} />
                                </button>
                                </>
                                }
                            </div>
                            :
                            <div className="pai-btns-cadastro">
                                <button></button>
                                <button className="btn-cadastro" disabled>
                                    Logar
                                    <HiArrowRight size={26} />
                                </button>
                            </div>
                            }
                            <div className="borda"></div>
                            <p>Este site é protegido pelo reCAPTCHA e segue a Política de Privacidade e os Termos de Uso do Google.</p>
                        </footer>
                        
                    </section>                    
                </div>
            </div>
        </>
    )
}

export default Login;