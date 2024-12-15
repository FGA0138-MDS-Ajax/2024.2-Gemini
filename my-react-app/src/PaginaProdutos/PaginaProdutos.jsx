import {Link} from 'react-router-dom';
import styles from './PaginaProdutos.module.css';

import Header from '../HeaderFolder/Header.jsx';
import Footer from '../FolderFooter/Footer.jsx';
import CardCamiseta from '../FolderCardCamiseta/CardCamiseta.jsx';

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