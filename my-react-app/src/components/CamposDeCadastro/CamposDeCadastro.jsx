import {Link} from 'react-router-dom';
import styles from './CamposDeCadastro.module.css';
import { BotaoVerdePadrao, CampoDeTexto } from '../../components';

function CamposDeCadastro(){

    return(

        <div className={styles.CamposDeCadastro}>

            <img src='/assets/Logos/LogoFGR.svg' className={styles.Logo}/>

            <CampoDeTexto label="Nome Completo"/>
            <CampoDeTexto label="E-mail ou usuário"/>
            <CampoDeTexto label="Senha"/>
            <CampoDeTexto label="Confirmar Senha"/>
            
            <Link to="/Home">
                <BotaoVerdePadrao label="Registra-se"/>
            </Link>

            <div className={styles.JaPossuiConta}>
                <p className={styles.TextoJaPossuiConta}>Já possui uma conta?</p>
                <Link to="/Login">
                    <button className={styles.BotaoLogin}>Faça Login</button>
                </Link>
            </div>

        </div>

    );

}

export default CamposDeCadastro