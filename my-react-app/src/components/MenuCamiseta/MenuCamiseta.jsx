import { BotaoVerdePadrao, Titulo, BotaoDeTamanho } from '../../components';
import styles from './MenuCamiseta.module.css';

function MenuCamiseta({imgSrc, nome, preco}){

    return(
        <div className={styles.MenuCamiseta}>
            <img className={styles.ImgCamiseta} src={imgSrc}/>
            <div className={styles.ConteudoEscrito}>
                <Titulo texto={nome} tamanho="64px" gradiente={true}/>
                <Titulo texto={preco} tamanho="64px" gradiente={true}/>
                <h5 className={styles.TextoTamanho}>Tamanho</h5>
                <div className={styles.BotoesDeTamanho}>
                    <BotaoDeTamanho label="P"/>
                    <BotaoDeTamanho label="M"/>
                    <BotaoDeTamanho label="G"/>
                    <BotaoDeTamanho label="XG"/>
                    <BotaoDeTamanho label="XXG"/>
                </div>
                <div className={styles.BotoesDeVenda}>
                    <button className={styles.BotaoGuiaDeTamanho}> <img src='/assets/Icons/Ruler.svg' alt="" />Guia de Tamanho</button>
                    <BotaoVerdePadrao label="Adicionar ao carrinho"/>
                </div>
            </div>
        </div>
    );

}

export default MenuCamiseta