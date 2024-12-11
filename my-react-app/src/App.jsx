import './App.css'
import Header from './HeaderFolder/Header.jsx'
import styles from './App.module.css'
import CardCamiseta from './FolderCardCamiseta/CardCamiseta.jsx'
import Footer from './FolderFooter/Footer.jsx'

function App() {

  return(
    <>
      <Header/>
      <img src='src/assets/bannerLegends.png' alt="" className={styles.banner}/>
      <div className={styles.CamisetasEmDestaque}>
            <CardCamiseta
                imgSrc='src/assets/CamisetaMCLaren.png'
                nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                preco= "R$ 59,99"
                prestacoes = "2x de r$ 29,99"
              ></CardCamiseta>
              <CardCamiseta
                imgSrc='src/assets/CamisetaRedbull.png'
                nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                preco= "R$ 59,99"
                prestacoes = "2x de r$ 29,99"
              ></CardCamiseta>
              <CardCamiseta
                imgSrc='src/assets/CamisetaMCLaren.png'
                nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                preco= "R$ 59,99"
                prestacoes = "2x de r$ 29,99"
              ></CardCamiseta>
              <CardCamiseta
                imgSrc='src/assets/CamisetaRedbull.png'
                nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                preco= "R$ 59,99"
                prestacoes = "2x de r$ 29,99"
              ></CardCamiseta>
      </div>
      <div className={styles.SecaoProjeto}>
                <h1 className={styles.TituloProjeto}>Projeto</h1>
                <p className={styles.ParagrafoProjeto}>A FGR(Fórmula Gama Racing) é uma equipe de competição de Fórmula SAE elétrico da Universidade de Brasília(UnB), campus FGA. Os discentes são responsáveis por todo o projeto e a construção do veículo. A equipe é dividida em áreas técnicas: Dinâmica Veicular, Estruturas, Eletrônica, Powertrain e Drivertrain. E também tem os departamentos: Marketing, Financeiro e Gestão de Pessoas.</p>
      </div>
      <div className={styles.SecaoCompeticao}>
                <div className={styles.TextosCompeticao}>
                <h1 className={styles.TituloCompeticao}>Competição</h1>
                <p className={styles.ParagrafoCompeticao}>A competição Formula SAE BRASIL tem como objetivo proporcionar aos estudantes de Engenharia a chance de colocar em prática os conhecimentos adquiridos em sala de aula, por meio do desenvolvimento de um projeto completo: um veículo do tipo Fórmula. Por um período de três dias, ocorrem testes estáticos e dinâmicos com os carros, com o objetivo de avaliar o desempenho de cada projeto na pista. Além disso, as equipes apresentam suas propostas técnicas, incluindo detalhes sobre o projeto, custos e também uma apresentação de marketing.</p>
                </div>
                <img src='src/assets/ImagemCompeticao.png' className={styles.ImagemCompeticao}></img>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
