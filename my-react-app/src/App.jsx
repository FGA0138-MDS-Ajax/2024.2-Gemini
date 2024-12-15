import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

import { Header, CardCamiseta, Footer, Carrossel } from './components/index.js';
import { Cadastro, Camiseta1, Camiseta2, Login, Produtos, Usuario } from './pages/index.jsx';
import styles from './App.module.css';

function App() {

  const LinksDasImagens = [
    {src: 'src/assets/banner/bannerLegends.png', link: '', alt: 'Descricao'},
    {src: 'src/assets/banner/Banner2.png', link: '', alt: 'Descricao'},
    {src: 'src/assets/banner/bannerLegends.png', link: '', alt: 'Descricao'},
    {src: 'src/assets/banner/Banner2.png', link: '', alt: 'Descricao'}
  ];

  return(

    <Router>

      <Routes>
        {/* Pagina Inicial */}
        <Route
          path="/Home"
          element={
            <>

        <Header/>

        <Carrossel LinksDasImagens={LinksDasImagens}/>

        <div className={styles.CamisetasEmDestaque}>
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
        <div className={styles.SecaoProjeto}>
          <h1 className={styles.TituloProjeto}>Projeto</h1>
          <p className={styles.ParagrafoProjeto}>A FGR(Fórmula Gama Racing) é uma equipe de competição de Fórmula SAE elétrico da Universidade de Brasília(UnB), campus FGA. Os discentes são responsáveis por todo o projeto e a construção do veículo. A equipe é dividida em áreas técnicas: Dinâmica Veicular, Estruturas, Eletrônica, Powertrain e Drivertrain. E também tem os departamentos: Marketing, Financeiro e Gestão de Pessoas.</p>
        </div>
        <div className={styles.SecaoCompeticao}>
          <div className={styles.TextosCompeticao}>
            <h1 className={styles.TituloCompeticao}>Competição</h1>
            <p className={styles.ParagrafoCompeticao}>A competição Formula SAE BRASIL tem como objetivo proporcionar aos estudantes de Engenharia a chance de colocar em prática os conhecimentos adquiridos em sala de aula, por meio do desenvolvimento de um projeto completo: um veículo do tipo Fórmula. Por um período de três dias, ocorrem testes estáticos e dinâmicos com os carros, com o objetivo de avaliar o desempenho de cada projeto na pista. Além disso, as equipes apresentam suas propostas técnicas, incluindo detalhes sobre o projeto, custos e também uma apresentação de marketing.</p>
          </div>
          <img src='src/assets/ImagemCompeticao.png' className={styles.ImagemCompeticao}/>
        </div>

        <Footer/>

        </>
      }

      />

      {/* Pagina Camiseta 1*/}
      <Route path='/Camiseta1' element={<Camiseta1/>} />

      
      {/* Pagina Camiseta 2*/}
      <Route path='/Camiseta2' element={<Camiseta2/>} />

      {/* Pagina Usuario*/}
      <Route path='/Usuario' element={<Usuario/>} />

      {/* Pagina Produtos*/}
      <Route path='/Produtos' element={<Produtos/>} />

      {/* Pagina Cadastro*/}
      <Route path='/Cadastro' element={<Cadastro/>} />

      {/* Pagina Login*/}
      <Route path='/Login' element={<Login/>} />

      </Routes>

    </Router>
    
  );
}

export default App

