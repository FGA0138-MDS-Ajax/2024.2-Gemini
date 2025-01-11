import {Link} from 'react-router-dom';
import styles from './CamposDeLogin.module.css';

function CamposDeLogin(){

    return(

        <div className={styles.CamposDeLogin}>

            <img src='src/assets/LogoFGR.png' className={styles.Logo}/>

            <input type="text" className={styles.CampoDeTexto} value="Usuário ou e-mail"/>
            <input type="text" className={styles.CampoDeTexto} value="Senha"/>

            <button className={styles.BotaoEsqueciSenha}>Esqueci a senha</button>

            <button className={styles.BotaoEntrar}>Entrar</button>

            <div className={styles.NaoTemConta}>
                <p className={styles.TextoNaoTemConta}>Não tem conta?</p>
                <button className={styles.BotaoRegistrar}>Registrar</button>
            </div>

            <button className={styles.BotaoEntrarComContaGoogle}>
                <img src='/assets/logoGoogle.png' className={styles.LogoConta}/>
                <p className={styles.TextoEntrarCom}>Entrar com Google</p>
            </button>
            <button className={styles.BotaoEntrarComContaFacebook}>
                <img className={styles.TextoEntrarCom} src='/assets/logoFacebook.png'></img>
                <p>Entrar com Facebook</p>
            </button>

        </div>

    );

}

export default CamposDeLogin