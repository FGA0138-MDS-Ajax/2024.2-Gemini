import {Link} from 'react-router-dom';
import { Header, FooterDeVendas, CamisetaNoCarrinho, BotaoVerdePadrao, Titulo } from '../../components/index.js';
import styles from './Carrinho.module.css'

function Carrinho() {

  return(

    <div className={styles.Carrinho}>
        <Header/>

        <div className={styles.SecaoCamisetaNoCarrinho}>

            <div className={styles.Nomes}>
                <Titulo texto="Produtos" tamanho="24px"/>
                <Titulo texto="Quantidade" tamanho="24px"/>
                <Titulo texto="Valor" tamanho="24px"/>
            </div>

            <div className={styles.CamisetasNoCarrinho}>
                <CamisetaNoCarrinho 
                    imgSrc='/assets/Camisetas/CamisetaMCLaren.png'
                    nome= "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    />

                <CamisetaNoCarrinho 
                    imgSrc='/assets/Camisetas/CamisetaRedbull.png'
                    nome= "RIVALS COLLECTIONS 2024 | REDBULL"
                    preco= "R$ 59,99"
                    />
            </div>

            <div className={styles.Valores}>
                <Titulo texto="Valor Total" tamanho="24px"/>
                <Titulo texto="119,98" tamanho="24px"/>
            </div>

        </div>

        <div className={styles.BotoesDeCompra}>
            <Link to='/Produtos'>
                <BotaoVerdePadrao label="Continuar Comprando"/>
            </Link>
            <Link to='/Checkout'>
                <BotaoVerdePadrao label="Prosseguir"/>
            </Link>
        </div>
  
        <FooterDeVendas/>

    </div>
  )
}

export default Carrinho