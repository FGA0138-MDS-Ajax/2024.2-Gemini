import { CamposDeLogin, FooterResumido } from '../../components';
import styles from './Login.module.css';

function PaginaLogin(){

    return(

        <div className={styles.Cadastro}>

            <CamposDeLogin/>

            <FooterResumido/>

        </div>

    );

}

export default PaginaLogin