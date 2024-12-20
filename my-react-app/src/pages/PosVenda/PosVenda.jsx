import {Link} from 'react-router-dom';
import { Header, Footer, CamisetaNoCheckOut, ResumoPagamento, CamposDeIndentificacao } from '../../components/index.js';
import styles from './PosVenda.module.css'

function PosVenda() {

  return(

    <div className={styles.PosVenda}>

        <Header/>

            <div className={styles.SecoesDeTexto}>

                <div className={styles.SecaoObrigado}>
                    <h1 className={styles.TituloObrigado}>Obrigado!</h1>
                    <p className={styles.TextoObrigado}>a equipe da fgr agradece pela sua compra! após a confirmação do pagamento, entre em contato pelo nosso whatsapp para receber seu produto!</p>
                    <p className={styles.TextoCodigo}>O seu código para retirada é:</p>
                    <p className={styles.CodigoRetirada}>#3060</p>
                </div>

                <div className={styles.SecaoPix}>
                    <img className={styles.CodigoPix} src='src/assets/QrCode.png'></img>
                    <p className={styles.PixCopia}>Pix copia e cola</p>
                </div>

            </div>

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

                        </div>
            
                        <div className={styles.SecaoPagamento}>
            
                            <h3 className={styles.TituloCheckout}>Pagamento</h3>
            
                            <ResumoPagamento
                                local="Faculdade do Gama"
                                total="119,98"
                            />
            
                            <h3>Método de Pagamento Selecionado</h3>
            
                            <form>
                                <label>
                                    <input type="radio" name="escolha" value="opcao1"/>Pix
                                </label>
                            </form>
            
                        </div>
            
            </div>
        
        <Footer/>

    </div>
  )
}

export default PosVenda