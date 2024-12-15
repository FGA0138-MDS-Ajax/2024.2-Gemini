import { Header, Footer, CardCamiseta } from '../../components/index.js';
import styles from './Produtos.module.css';

function PaginaProdutos(){

    return(

        <div className={styles.PaginaProdutos}>

            <Header/>

            <div className={styles.Titulos}>

                <h1 className={styles.TituloProdutos}>Produtos</h1>
                <h1 className={styles.TituloFiltrar}>Filtrar</h1>

            </div>

            <div className={styles.ProdutosGrid}>

                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />

                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />
                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />
                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />

                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />

                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />

                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />

                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />

                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />

                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />

                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />

                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />

                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />

                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />

                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-1"
                    imgSrc='/assets/camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />

                <CardCamiseta
                    linkPaginaCamiseta= "/pagina-camiseta-2"
                    imgSrc='/assets/camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                />

            </div>

            <Footer/>

        </div>

    );

}

export default PaginaProdutos