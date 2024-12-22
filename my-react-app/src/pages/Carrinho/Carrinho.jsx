import {Link} from 'react-router-dom';
import { Header, FooterDeVendas, CamisetaNoCarrinho, BotaoVerdePadrao } from '../../components/index.js';
import styles from './Carrinho.module.css'

function Carrinho() {

  return(

    <div className={styles.Carrinho}>
        <Header/>

        <div className={styles.SecaoCamisetaNoCarrinho}>

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

        </div>

        <div className={styles.BotoesDeCompra}>
            <Link to='/Checkout'>
                <BotaoVerdePadrao label="Prosseguir"/>
            </Link>
            <Link to='/Produtos'>
                <BotaoVerdePadrao label="Continuar Comprando"/>
            </Link>
        </div>
  
        <FooterDeVendas/>

    </div>
  )
}

export default Carrinho