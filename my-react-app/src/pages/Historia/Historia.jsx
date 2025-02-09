import { Header, Footer, Titulo, ParagrafoPadrao } from '../../components/index.js';
import styles from './Historia.module.css';

function Historia() {
  const membros = [
    "Arthur da Paz Magalhães - Engenharia Mecânica",
    "Artur Henrique dos Santos Oliveira - Engenharia Automotiva",
    "Bruno Maurício Neves Viar - Engenharia Automotiva",
    "Carlos Eduardo Meireles do Amaral - Engenharia Aeroespacial",
    "Daniel Ribeiro Félix - Engenharia de Energia",
    "Danilo Ligiero - Engenharia Aeroespacial",
    "Davi da Paz Magalhães - Engenharia Automotiva",
    "Diego Sampaio Tebaldi - Engenharias",
    "Eduardo Schuindt Santos - Engenharia de Software",
    "Enzo Govatski - Engenharia Automotiva",
    "Felipe Andrade - Engenharia Eletrônica",
    "Felipe Sidrane - Engenharia Eletrônica",
    "Gabriel Basto Bertolazi - Engenharia de Software",
    "Gabriel Barges - Engenharia Automotiva",
    "Gabriel de Avelar Leite - Engenharia Automotiva",
    "Giavana Martins de Brito - Engenharia de Software",
    "Guilherme Rodrigues de Carvalho - Engenharia Automotiva",
    "Gustavo Santos da Silva Resende - Engenharia de Energia",
    "Italo Bezerra - Engenharia Aeroespacial",
    "João Carlos Labo Sousa Monteira - Engenharia de Software",
    "João Guilherme Nascimento Lourenço - Engenharia de Energia",
    "João Victor Marques Reis de Miranda - Engenharia de Software",
    "Joed dos Santos de Oliveira - Engenharia Automotiva",
    "Jardano dos Santos de Oliveira - Engenharia Eletrônica",
    "Lavynia Fátima da Silva Sousa - Engenharia de Energia",
    "Lucas Mateus Teixeira de Souza - Engenharia de Software",
    "Luiz Gabriel Lima Oliveira - Engenharia Automotiva",
    "Mateus Fidelis Marinho Maia - Engenharia de Software",
    "Otávio Augusto Binder - Engenharia Eletrônica",
    "Paulo Caleb Fernandes da Silva - Engenharia Eletrônica",
    "Paulo Emanuel Mendes Amorim - Engenharia Automotiva",
    "Paulo Fernandes de Melo - Engenharia Automotiva",
    "Rafael Sobreira Maura - Engenharia Automotiva",
    "Rafael Torres Gonzaga Parreira - Engenharia de Software",
    "Renan Camara de Oliveira Farias - Engenharia Eletrônica",
    "Tasso Oliveira da Rocha - Engenharia Eletrônica",
    "Thalis Cezar Ianzner - Engenharia Eletrônica"
  ];

  return (
    <div className={styles.PaginaHistoria}>
      <Header />

      <div className={styles.SecaoNossaHistoria}>
        <div className={styles.TextoSecao}>
          <Titulo texto="Nossa História" tamanho="86px" gradiente={false} />
          <ParagrafoPadrao texto="A Fórmula Gama Racing (FGR) é a primeira e única equipe de Fórmula SAE Elétrico do Centro-Oeste, fundada em 30 de outubro há 11 anos na Universidade de Brasília (UnB). Sua missão é impulsionar a eletromobilidade sustentável no Distrito Federal. A equipe já desenvolveu cinco protótipos elétricos, e atualmente trabalha no modelo E05, que incorpora avanços significativos em mobilidade elétrica e aerodinâmica." />
          <ParagrafoPadrao texto="A FGR conta com aproximadamente 47 membros divididos entre trainees e efetivos. A equipe possui departamentos técnicos (Mecânica e Elétrica) e administrativos (Gestão de Pessoas, Marketing, Comercial, Financeiro/Logística), sendo liderada por um Capitão, um Gerente de Projetos e uma Gerente de Departamentos." />
          <ParagrafoPadrao texto="A equipe já participou de diversas competições nacionais e internacionais, como a Fórmula SAE Brasil e a competição Formula Student, destacando-se pela inovação e performance de seus protótipos. A FGR busca, a cada edição, elevar o nível de seus veículos e consolidar a presença da universidade no cenário da engenharia automotiva sustentável." />
          
          <Titulo texto="Membros e seus Cursos" tamanho="48px" gradiente={false} />
          
          <div className={styles.MembrosContainer}>
            {membros.map((membro, index) => (
              <span key={index} className={styles.MembroItem}>{membro}</span>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Historia;