import { CamposDeRecuperacao, FooterResumido } from '../../components';

import styles from './RecuperarSenha.module.css';

function RecuperarSenha(){

    return(

        <div className={styles.RecuperarSenha}>

            <CamposDeRecuperacao/>

            <FooterResumido/>

        </div>

    );

}

export default RecuperarSenha;
