import styles from './MenuUsuario.module.css';
import { BotaoVerdePadrao, CampoEditavel, Titulo } from '../../components/index.js';

function ComponenteUsuario(){

    return(

        <div className={styles.Usuario}>

            <Titulo texto="Conectado" tamanho="42px" gradiente={false}/>

            <div className={styles.ContasDeLogin}>
                <img src='/assets/logoGoogle.png' className={styles.ContaDeLogin}></img>
                <img src='/assets/logoFacebook.png' className={styles.ContaDeLogin}></img>
            </div>

            <div className={styles.Divisoria}/>

            <Titulo texto="Dados da conta" tamanho="42px" gradiente={false}/>

            <CampoEditavel label="Email" info="Seu email aqui"/>
            <CampoEditavel label="Usuário" info="Seu usuário aqui"/>
            <CampoEditavel label="Senha" info="Sua senha aqui"/>

            <div>
                <BotaoVerdePadrao label="Cancelar"/>
                <BotaoVerdePadrao label="Alterar Dados"/>
            </div>

        </div>

    );

}

export default ComponenteUsuario