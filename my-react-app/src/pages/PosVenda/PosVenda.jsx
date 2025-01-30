import { Link } from "react-router-dom";
import {
  Header,
  FooterDeVendas,
  CamisetaNoCheckOut,
  ResumoPagamento,
  CamposDeIndentificacao,
  Titulo,
  ParagrafoPadrao,
} from "../../components/index.js";
import styles from "./PosVenda.module.css";

function PosVenda() {
  return (
    <div className={styles.PosVenda}>
      <Header />

      <div className={styles.SecoesDeTexto}>
        <div className={styles.SecaoObrigado}>
          <Titulo texto="Obrigado" tamanho="64px"/>
          <ParagrafoPadrao texto="a equipe da fgr agradece pela sua compra! após a confirmação do pagamento, entre em contato pelo nosso whatsapp para receber seu produto!" />
          <ParagrafoPadrao texto="O seu código para retirada é:" />
          <Titulo texto="#3060" tamanho="32px" gradiente={false} />
        </div>

        <div className={styles.SecaoPix}>
          <img className={styles.CodigoPix} src="src/assets/QrCode.png"></img>
          <p className={styles.PixCopia}>Pix copia e cola</p>
        </div>
      </div>

      <div className={styles.ConteudoCheckout}>
        <div className={styles.SecaoProdutos}>
          <h3 className={styles.TituloCheckout}>Produtos</h3>
          <CamisetaNoCheckOut
            imgSrc="/assets/Camisetas/CamisetaMCLaren.png"
            nome="RIVALS COLLECTIONS 2024 | MCLAREN"
            tamanho="Tamanho M"
          />
          <CamisetaNoCheckOut
            imgSrc="/assets/Camisetas/CamisetaRedbull.png"
            nome="RIVALS COLLECTIONS 2024 | REDBULL"
            tamanho="Tamanho M"
          />
        </div>

        <div className={styles.SecaoIdentificacao}>
          <h3 className={styles.TituloCheckout}>Identificacao</h3>
          <CamposDeIndentificacao />
        </div>

        <div className={styles.SecaoPagamento}>
          <h3 className={styles.TituloCheckout}>Pagamento</h3>

          <ResumoPagamento local="Faculdade do Gama" total="119,98" />

          <Titulo
            texto="Método de Pagamento Selecionado"
            tamanho="24px"
          />

          <form>
            <label>
              <input type="radio" name="escolha" value="opcao1" />
              Pix
            </label>
          </form>
        </div>
      </div>

      <FooterDeVendas />
    </div>
  );
}

export default PosVenda;
