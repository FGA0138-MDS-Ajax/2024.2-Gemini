import { BotaoVerdePadrao, Titulo, BotaoDeTamanho, CarrosselImagensCamiseta } from '../../components';
import styles from './MenuCamiseta.module.css';

function MenuCamiseta({produtos}){

    return(
        <div className={styles.MenuCamiseta}>
           <CarrosselImagensCamiseta conteudoImagens={produtos.imagens}/>
            <div className={styles.ConteudoEscrito}>
                <Titulo texto={produtos.nome} tamanho="64px" gradiente={false}/>
                <Titulo texto={produtos.preco} tamanho="64px" gradiente={false}/>
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