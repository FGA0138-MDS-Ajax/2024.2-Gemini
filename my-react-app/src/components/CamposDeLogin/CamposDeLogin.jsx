import {Link} from 'react-router-dom';
import styles from './CamposDeLogin.module.css';

function CamposDeLogin(){

    return(

        <div className={styles.CamposDeLogin}>

            <img src='/assets/Logos/LogoFGR.svg' className={styles.Logo}/>

            <form className={styles.FormLogin} action="/enviar-dados" method="POST">
                <input className={styles.CampoDeTexto} type="email" name="email" placeholder="Digite seu e-mail"/>
                <input className={styles.CampoDeTexto} type="password" name="senha" placeholder="Digite sua senha"/>
                <button className={styles.BotaoEntrar} type="submit">Entrar</button>
            </form>

            <button className={styles.BotaoEsqueciSenha}>Esqueci a senha</button>


            <div className={styles.NaoTemConta}>
                <p className={styles.TextoNaoTemConta}>Não tem conta?</p>
                <Link to="/Cadastro">
                    <button className={styles.BotaoRegistrar}>Registrar</button>
                </Link>
            </div>

            <button className={styles.BotaoEntrarComContaGoogle}>
                <img src='/assets/Logos/LogoGoogleRedonda.svg' className={styles.LogoConta}/>
                <p className={styles.TextoEntrarCom}>Entrar com Google</p>
            </button>
            <button className={styles.BotaoEntrarComContaFacebook}>
                <img className={styles.TextoEntrarCom} src='/assets/Logos/LogoFacebookRedonda.svg'></img>
                <p>Entrar com Facebook</p>
            </button>

        </div>

    );

}

export default CamposDeLogin