import {Link} from 'react-router-dom';
import styles from './CamisetaNoCheckOut.module.css';
import { Titulo } from '../../components';

function CamisetaNoCheckOut({ imgSrc, nome, tamanho }){

    return(

        <div className={styles.CamisetaNoCheckOut}>
            <img className={styles.ImgCamiseta} src={imgSrc}/>
            <div className={styles.InformacoesCamiseta}>
                <Titulo texto={nome} tamanho="20px" gradiente={true}/>
                <Titulo texto={tamanho} tamanho="20px" gradiente={true}/>
            </div>
        </div>

    );

}

export default CamisetaNoCheckOut
