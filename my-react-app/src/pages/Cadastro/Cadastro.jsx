import { CamposDeCadastro, FooterResumido } from '../../components';

import styles from './Cadastro.module.css';

function PaginaCadastro(){

    return(

        <div className={styles.Cadastro}>

            <CamposDeCadastro/>

            <FooterResumido/>

        </div>

    );

}

export default PaginaCadastro