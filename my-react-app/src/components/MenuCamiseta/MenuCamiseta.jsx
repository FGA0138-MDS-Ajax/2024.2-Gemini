import styles from './MenuCamiseta.module.css';

function MenuCamiseta({imgSrc, nome, preco}){

    return(
        <div className={styles.MenuCamiseta}>
            <img className={styles.ImgCamiseta} src={imgSrc}/>
            <div className={styles.ConteudoEscrito}>
                <h1 className={styles.NomeCamiseta}>{nome}</h1>
                <h1 className={styles.PrecoCamiseta}>{preco}</h1>
                <h5 className={styles.TextoTamanho}>Tamanho</h5>
                <div className={styles.BotoesDeTamanho}>
                    <button className={styles.BotaoDeTamanho}>P</button>
                    <button className={styles.BotaoDeTamanho}>M</button>
                    <button className={styles.BotaoDeTamanho}>G</button>
                    <button className={styles.BotaoDeTamanho}>XG</button>
                    <button className={styles.BotaoDeTamanho}>XXG</button>
                </div>
                <button className={styles.BotaoGuiaDeTamanho}>Guia de Tamanho</button>
                <button className={styles.BotaoAdicionarAoCarrinho}>Adicionar ao carrinho</button>
            </div>
        </div>
    );

}

export default MenuCamiseta