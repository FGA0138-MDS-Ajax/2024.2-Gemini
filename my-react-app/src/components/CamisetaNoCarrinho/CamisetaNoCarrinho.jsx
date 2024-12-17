import {Link} from 'react-router-dom';
import styles from './CamisetaNoCarrinho.module.css';

function CamisetaNoCarrinho({imgSrc, nome, preco}){

    return(

        <div className={styles.CamisetaNoCarrinho}>
            <img className={styles.ImgCamiseta} src={imgSrc}/>
            <h3 className={styles.NomeCamiseta}>{nome}</h3>
            <div className={styles.BotoesDeQtd}>
                <button className={styles.BotaoDeQtd}><img src='assets/Icons/Sum.png' alt="" /></button>
                <p className={styles.QtdDoItem}>1</p>
                <button className={styles.BotaoDeQtd}><img src='assets/Icons/Reduce.png' alt="" /></button>
            </div>
            <h3 className={styles.PrecoCamiseta}>{preco}</h3>
            <button className={styles.BotaoLixeira}><img src='assets/Icons/Delete.png' alt="" /></button>
        </div>

    );

}

export default CamisetaNoCarrinho

