import { Header, Footer, CamisetaNoCarrinho } from '../../components/index.js';
import styles from './Carrinho.module.css'

function Carrinho() {

  return(

    <div className={styles.PaginaCarrinho}>
        <Header/>

        <div className={styles.Nomes}>
            <h5>Produtos</h5>
            <h5>Quantidade</h5>
            <h5>Valor</h5>
        </div>

        <div className={styles.CamisetasNoCarrinho}>
            <CamisetaNoCarrinho 
                imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                nome= "RIVALS COLLECTIONS 2024 | MCLAREN"
                preco= "R$ 59,99"
                />

            <CamisetaNoCarrinho 
                imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                nome= "RIVALS COLLECTIONS 2024 | MCLAREN"
                preco= "R$ 59,99"
                />
        </div>

        <div className={styles.Valores}>
            <h5 className={styles.TextoValores}>Valor Total</h5>
            <h5 className={styles.ValorTotal}>119,98 R$</h5>
        </div>

        <div className={styles.BotoesDeCompra}>
            <button className={styles.BotaoDeCompra}>Prosseguir</button>
            <button className={styles.BotaoDeCompra}>Continuar Comprando</button>
        </div>
  
        <Footer/>

    </div>
  )
}

export default Carrinho