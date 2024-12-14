import {Link} from 'react-router-dom';
import styles from './ComponenteUsuario.module.css';

function ComponenteUsuario(){

    return(

        <div className={styles.Usuario}>

            <h1>Conectado</h1>

            <div className={styles.ContasDeLogin}>
                <img src='/assets/logoGoogle.png' className={styles.ContaDeLogin}></img>
                <img src='/assets/logoFacebook.png' className={styles.ContaDeLogin}></img>
            </div>

            <div className={styles.Divisoria}/>

            <h1>Dados da conta</h1>

            <h3 className={styles.Label}>Email</h3>
            <input type="text" className={styles.CampoDeTexto} value="Este e um texto que pode ser editado."/>

            <h3 className={styles.Label}>Usuário</h3>
            <input type="text" className={styles.CampoDeTexto} value="Este e um texto que pode ser editado."/>

            <h3 className={styles.Label}>Senha</h3>
            <input type="text" className={styles.CampoDeTexto} value="Este e um texto que pode ser editado."/>

            <div>
                <button className={styles.BotaoCancelar}>Cancelar</button>
                <button className={styles.BotaoAlternarDados}>Alternar dados</button>
            </div>

        </div>

    );

}

export default ComponenteUsuario