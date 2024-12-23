import {Link} from 'react-router-dom';
import styles from './CardCamiseta.module.css';

function CardCamiseta({linkPaginaCamiseta, imgFrente, imgTras, nome, preco, prestacoes}){

    return(

        <Link to={linkPaginaCamiseta} className={styles.CardLink}>
            <div className={styles.CardCamiseta}>

                {/* Imagem da frente */}
                <img className={`${styles.ImgCamiseta} ${styles.Front}`} src={imgFrente} alt="" />
        
                {/* Imagem de trás */}
                <img className={`${styles.ImgCamiseta} ${styles.Back}`} src={imgTras} alt="" />
                
                <div className={styles.InfoCard}>
                    <h3 className={styles.NomeCamiseta}>{nome}</h3>
                        <div className={styles.Valores}>
                            <h3 className={styles.PrecoCamiseta}>{preco}</h3>
                            <h5 className={styles.PrestacoesCamiseta}>{prestacoes}</h5>
                        </div>
                </div>
            </div>
        </Link>

    );

}

export default CardCamiseta