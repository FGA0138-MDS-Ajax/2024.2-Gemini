import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

import { Header, CardCamiseta, Footer, Carrossel, Titulo, ParagrafoPadraoEsquerda, BotaoWhatsapp} from './components/index.js';
import { Cadastro, Camiseta1, Camiseta2, Login, Produtos, Usuario, Carrinho, Checkout, Historia, Patrocinadores, PosVenda} from './pages/index.jsx';
import styles from './App.module.css';

function App() {

  const LinksDasImagens = [
    {src: '/assets/Banners/Banner1.png', link: '', alt: 'Descricao'},
    {src: '/assets/Banners/Banner2.png', link: '', alt: 'Descricao'},
    {src: '/assets/Banners/Banner1.png', link: '', alt: 'Descricao'},
    {src: '/assets/Banners/Banner2.png', link: '', alt: 'Descricao'}
  ];

  return(

    <Router>

      <Routes>
        {/* Pagina Inicial */}
        <Route
          path="/Home"
          element={

            <section>

              <Header/>

                <Carrossel LinksDasImagens={LinksDasImagens}/>

                <div className={styles.CamisetasEmDestaque}>
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta1"
                    imgFrente='/assets/Camisetas/CamisetaMCLaren.png'
                    imgTras='/assets/Camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta2"
                    imgFrente='/assets/Camisetas/CamisetaRedbull.png'
                    imgTras='/assets/Camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | REDBULL"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta1"
                    imgFrente='/assets/Camisetas/CamisetaMCLaren.png'
                    imgTras='/assets/Camisetas/CamisetaRedbull.png'
                    nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                  <CardCamiseta
                    linkPaginaCamiseta= "/Camiseta2"
                    imgFrente='/assets/Camisetas/CamisetaRedbull.png'
                    imgTras='/assets/Camisetas/CamisetaMCLaren.png'
                    nome = "RIVALS COLLECTIONS 2024 | REDBULL"
                    preco= "R$ 59,99"
                    prestacoes = "2x de r$ 29,99"
                  />
                </div>

                <section className={styles.SecaoProjeto}>
                  <Titulo texto="Projeto" tamanho="86px" gradiente={false}/>
                  <p className={styles.ParagrafoProjeto}>A FGR(Fórmula Gama Racing) é uma equipe de competição de Fórmula SAE elétrico da Universidade de Brasília(UnB), campus FGA. Os discentes são responsáveis por todo o projeto e a construção do veículo. A equipe é dividida em áreas técnicas: Dinâmica Veicular, Estruturas, Eletrônica, Powertrain e Drivertrain. E também tem os departamentos: Marketing, Financeiro e Gestão de Pessoas.</p>
                </section>

                <section className={styles.SecaoCompeticao}>
                  <div className={styles.TextosCompeticao}>
                    <Titulo texto="Competição" tamanho="86px" gradiente={false}/>
                    <ParagrafoPadraoEsquerda texto="A competição Formula SAE BRASIL tem como objetivo proporcionar aos estudantes de Engenharia a chance de colocar em prática os conhecimentos adquiridos em sala de aula, por meio do desenvolvimento de um projeto completo: um veículo do tipo Fórmula. Por um período de três dias, ocorrem testes estáticos e dinâmicos com os carros, com o objetivo de avaliar o desempenho de cada projeto na pista. Além disso, as equipes apresentam suas propostas técnicas, incluindo detalhes sobre o projeto, custos e também uma apresentação de marketing."/>
                  </div>
                  <img src='/assets/Imagens/imagemCompeticao.png' className={styles.ImagemCompeticao}/>
                </section>

                <BotaoWhatsapp/>

                <Footer/>
                
            </section>

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

      {/* Pagina Carrinho*/}
      <Route path='/Carrinho' element={<Carrinho/>} />

      {/* Pagina Checkout*/}
      <Route path='/Checkout' element={<Checkout/>} />

      {/* Pagina Historia*/}
      <Route path='/Historia' element={<Historia/>} />

      {/* Pagina Patrocinadores*/}
      <Route path='/Patrocinadores' element={<Patrocinadores/>} />

      {/* Pagina Pos-venda*/}
      <Route path='/Pos-venda' element={<PosVenda/>} />

      </Routes>

    </Router>
    
  );
}

export default App



