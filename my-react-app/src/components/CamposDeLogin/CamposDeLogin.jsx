import {Link} from 'react-router-dom';
import { CampoDeTexto } from '../../components';
import styles from './CamposDeLogin.module.css';

function CamposDeLogin(){

    return(

        <div className={styles.CamposDeLogin}>

            <img src='src/assets/LogoFGR.png' className={styles.Logo}/>

            <CampoDeTexto label="Usuário ou e-mail"/>
            <CampoDeTexto label="Senha"/>

            <button className={styles.BotaoEsqueciSenha}>Esqueci a senha</button>

            <Link to="/Home">
                <button className={styles.BotaoEntrar}>Entrar</button>
            </Link>

            <div className={styles.NaoTemConta}>
                <p className={styles.TextoNaoTemConta}>Não tem conta?</p>
                <Link to="/Cadastro">
                    <button className={styles.BotaoRegistrar}>Registrar</button>
                </Link>
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