import { Header, FooterDeVendas, CardCamiseta, Titulo } from '../../components/index.js';
import styles from './Produtos.module.css';

function PaginaProdutos(){

    return(

        <section className={styles.Produtos}>

            <Header/>

            <div className={styles.Titulos}>

                <Titulo texto="Produtos" tamanho="64px" gradiente={false}/>
                <h1 className={styles.TituloFiltrar}>Filtrar</h1>

            </div>

            <div className={styles.ProdutosGrid}>

            <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />

                <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />

                    <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />

                    <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />

            </div>

            <FooterDeVendas/>

        </section>

    );

}

export default PaginaProdutos