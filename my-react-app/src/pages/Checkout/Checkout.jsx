import {Link} from 'react-router-dom';
import { Header, FooterDeVendas, CamisetaNoCheckOut, ResumoPagamento, CamposDeIndentificacao, BotaoVerdePadrao } from '../../components/index.js';
import styles from './Checkout.module.css'

function Checkout() {

  return(

    <div className={styles.Checkout}>
        <Header/>

        <div className={styles.ConteudoCheckout}>
            
            <div className={styles.SecaoProdutos}>

                <h3 className={styles.TituloCheckout}>Produtos</h3>
                <CamisetaNoCheckOut
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome= "RIVALS COLLECTIONS 2024 | MCLAREN"
                    tamanho= "Tamanho M"
                />
                <CamisetaNoCheckOut
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome= "RIVALS COLLECTIONS 2024 | MCLAREN"
                    tamanho= "Tamanho M"
                />

            </div>

            <div className={styles.SecaoIdentificacao}>

                <h3 className={styles.TituloCheckout}>Identificacao</h3>
                <CamposDeIndentificacao/>

                <h3>Endereço de Entrega</h3>

                <form>
                    <label>
                        <input type="radio" name="escolha" value="opcao1"/>Faculdade do Gama
                    </label>
                    <label>
                        <input type="radio" name="escolha" value="opcao2"/>Darcy Ribeiro - Asa Norte
                    </label>
                </form>

            </div>

            <div className={styles.SecaoPagamento}>

                <h3 className={styles.TituloCheckout}>Pagamento</h3>

                <ResumoPagamento
                    local="Faculdade do Gama"
                    total="119,98"
                />

                <h3>Selecione o Método De Pagamento</h3>

                <form>
                    <label>
                        <input type="radio" name="escolha" value="opcao1"/>Pix
                    </label>
                    <label>
                        <input type="radio" name="escolha" value="opcao2"/>Boleto
                    </label>
                    <label>
                        <input type="radio" name="escolha" value="opcao3"/>Débito / Crédito
                    </label>
                </form>

            </div>

        </div>

        <div className={styles.BotoesCheckout}>

            <Link to='/Produtos'>
                <BotaoVerdePadrao label="Continuar Comprando"/>
            </Link>
            <Link to='/Pos-venda'>
                <BotaoVerdePadrao label="Finalizar Compra"/>
            </Link>

        </div>
        
        <FooterDeVendas/>

    </div>
  )
}

export default Checkout