import { Header, Footer, Titulo, ParagrafoPadrao } from '../../components/index.js';
import styles from './Historia.module.css';

function Historia() {
  return(
    <div className={styles.PaginaHistoria}>
      <Header/>

      <div className={styles.SecaoNossaHistoria}>
        <div className={styles.TextoSecao}>
          <Titulo texto="Nossa História" tamanho="86px" gradiente={false}/>

          <ParagrafoPadrao texto="A Fórmula Gama Racing (FGR) é a primeira e única equipe de Fórmula SAE Elétrico do Centro-Oeste, fundada em 30 de outubro há 11 anos na Universidade de Brasília (UnB). Sua missão é impulsionar a eletromobilidade sustentável no Distrito Federal. A equipe já desenvolveu cinco protótipos elétricos, e atualmente trabalha no modelo E05, que incorpora avanços significativos em mobilidade elétrica e aerodinâmica."/>

          <ParagrafoPadrao texto="A FGR conta com aproximadamente 47 membros divididos entre trainees e efetivos. A equipe possui departamentos técnicos (Mecânica e Elétrica) e administrativos (Gestão de Pessoas, Marketing, Comercial, Financeiro/Logística), sendo liderada por um Capitão, um Gerente de Projetos e uma Gerente de Departamentos."/>

          <ParagrafoPadrao texto="A FGR participa anualmente da Fórmula SAE Brasil, em São Paulo. Entre os principais resultados estão: em 2023 a equipe ficou em 11º lugar, em 2022 foi 8º lugar, em 2019 conquistou o 12º lugar, e em 2018 e 2017 ficou com o 13º lugar."/>

          <ParagrafoPadrao texto="Atualmente, a equipe está finalizando o desenvolvimento do E05, um protótipo com tecnologias de ponta. Além das competições, a FGR promove a eletromobilidade sustentável em eventos como congressos de engenharia, Campus Party, C-Move, e realiza iniciativas inclusivas, como o projeto 'Mecânica para Mulheres'."/>

        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Historia;
