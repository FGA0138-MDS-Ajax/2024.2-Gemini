import {Link} from 'react-router-dom';
import { Titulo } from '../../components';
import styles from './CamisetaNoCarrinho.module.css';

function CamisetaNoCarrinho({imgSrc, nome, preco}){

    return(

        <div className={styles.SecaoCamisetaNoCarrinho}>

            <div className={styles.CamisetaNoCarrinho}>
                <img className={styles.ImgCamiseta} src={imgSrc}/>
                <Titulo texto={nome} tamanho="20px" gradiente={true}/>
                <div className={styles.BotoesDeQtd}>
                    <button className={styles.BotaoDeQtd}><img src='assets/Icons/Sum.svg' alt="" /></button>
                    <p className={styles.QtdDoItem}>1</p>
                    <button className={styles.BotaoDeQtd}><img src='assets/Icons/Reduce.svg' alt="" /></button>
                </div>
                <Titulo texto={preco} tamanho="20px" gradiente={true}/>
                <button className={styles.BotaoLixeira}><img src='assets/Icons/Delete.svg' alt="" /></button>
            </div>

        <div className={styles.Divisoria}></div>

        </div>

    );

}

export default CamisetaNoCarrinho

