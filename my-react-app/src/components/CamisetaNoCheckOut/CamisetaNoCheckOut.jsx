import {Link} from 'react-router-dom';
import styles from './CamisetaNoCheckOut.module.css';

function CamisetaNoCheckOut({ imgSrc, nome, tamanho }){

    return(

        <div className={styles.CamisetaNoCheckOut}>
            <img className={styles.ImgCamiseta} src={imgSrc}/>
            <div className={styles.InformacoesCamiseta}>
                <h3 className={styles.NomeCamiseta}>{nome}</h3>
                <h3 className={styles.TamanhoCamiseta}>{tamanho}</h3>
            </div>
        </div>

    );

}

export default CamisetaNoCheckOut
