import { CamposDeLogin, FooterResumido } from '../../components';
import styles from './Login.module.css';

function PaginaLogin(){

    return(

        <div className={styles.Login}>

            <CamposDeLogin/>

            <FooterResumido/>

        </div>

    );

}

export default PaginaLogin