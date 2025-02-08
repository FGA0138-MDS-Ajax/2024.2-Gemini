import {Link} from 'react-router-dom';
import styles from './CamposDeCadastro.module.css';

function CamposDeCadastro(){

    return(

        <div className={styles.CamposDeCadastro}>

            <img src='/assets/Logos/LogoFGR.svg' className={styles.Logo}/>

            <form className={styles.FormCadastro} action="/enviar-dados" method="POST">
                <input className={styles.CampoDeTexto} type="text" name="nome" placeholder="Digite seu nome completo"/>
                <input className={styles.CampoDeTexto} type="email" name="email" placeholder="Digite seu e-mail"/>
                <input className={styles.CampoDeTexto} type="password" name="senha" placeholder="Digite sua senha"/>
                <input className={styles.CampoDeTexto} type="password" name="senha" placeholder="Confirme sua senha"/>
                <button className={styles.BotaoVerdePadrao} type="submit">Registra-se</button>
            </form>

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