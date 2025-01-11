import {Link} from 'react-router-dom';
import styles from './CamposDeCadastro.module.css';

function CamposDeCadastro(){

    return(

        <div className={styles.CamposDeCadastro}>

            <img src='src/assets/LogoFGR.png' className={styles.Logo}/>

            <input type="text" className={styles.CampoDeTexto} value="Nome Completo"/>
            <input type="text" className={styles.CampoDeTexto} value="E-mail ou usuário"/>
            <input type="text" className={styles.CampoDeTexto} value="Senha"/>
            <input type="text" className={styles.CampoDeTexto} value="Confirmar Senha"/>

            <button className={styles.BotaoRegistrase}>Registra-se</button>

            <div className={styles.JaPossuiConta}>
                <p className={styles.TextoJaPossuiConta}>Já possui uma conta?</p>
                <button className={styles.BotaoLogin}>Faça Login</button>
            </div>

        </div>

    );

}

export default CamposDeCadastro