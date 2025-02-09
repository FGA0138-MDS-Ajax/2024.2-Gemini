import { Header, Footer, Titulo, ParagrafoPadrao } from '../../components/index.js';
import styles from './Historia.module.css';

function Historia() {
  const membros = [
    { nome: "Arthur da Paz Magalhães", curso: "Engenharia Mecânica" },
    { nome: "Artur Henrique dos Santos Oliveira", curso: "Engenharia Automotiva" },
    { nome: "Bruno Maurício Neves Viar", curso: "Engenharia Automotiva" },
    { nome: "Carlos Eduardo Meireles do Amaral", curso: "Engenharia Aeroespacial" },
    { nome: "Daniel Ribeiro Félix", curso: "Engenharia de Energia" },
    { nome: "Danilo Ligiero", curso: "Engenharia Aeroespacial" },
    { nome: "Davi da Paz Magalhães", curso: "Engenharia Automotiva" },
    { nome: "Diego Sampaio Tebaldi", curso: "Engenharias" },
    { nome: "Eduardo Schuindt Santos", curso: "Engenharia de Software" },
    { nome: "Enzo Govatski", curso: "Engenharia Automotiva" },
    { nome: "Felipe Andrade", curso: "Engenharia Eletrônica" },
    { nome: "Felipe Sidrane", curso: "Engenharia Eletrônica" },
    { nome: "Gabriel Basto Bertolazi", curso: "Engenharia de Software" },
    { nome: "Gabriel Barges", curso: "Engenharia Automotiva" },
    { nome: "Gabriel de Avelar Leite", curso: "Engenharia Automotiva" },
    { nome: "Giavana Martins de Brito", curso: "Engenharia de Software" },
    { nome: "Guilherme Rodrigues de Carvalho", curso: "Engenharia Automotiva" },
    { nome: "Gustavo Santos da Silva Resende", curso: "Engenharia de Energia" },
    { nome: "Italo Bezerra", curso: "Engenharia Aeroespacial" },
    { nome: "João Carlos Labo Sousa Monteira", curso: "Engenharia de Software" },
    { nome: "João Guilherme Nascimento Lourenço", curso: "Engenharia de Energia" },
    { nome: "João Victor Marques Reis de Miranda", curso: "Engenharia de Software" },
    { nome: "Joed dos Santos de Oliveira", curso: "Engenharia Automotiva" },
    { nome: "Jardano dos Santos de Oliveira", curso: "Engenharia Eletrônica" },
    { nome: "Lavynia Fátima da Silva Sousa", curso: "Engenharia de Energia" },
    { nome: "Lucas Mateus Teixeira de Souza", curso: "Engenharia de Software" },
    { nome: "Luiz Gabriel Lima Oliveira", curso: "Engenharia Automotiva" },
    { nome: "Mateus Fidelis Marinho Maia", curso: "Engenharia de Software" },
    { nome: "Otávio Augusto Binder", curso: "Engenharia Eletrônica" },
    { nome: "Paulo Caleb Fernandes da Silva", curso: "Engenharia Eletrônica" },
    { nome: "Paulo Emanuel Mendes Amorim", curso: "Engenharia Automotiva" },
    { nome: "Paulo Fernandes de Melo", curso: "Engenharia Automotiva" },
    { nome: "Rafael Sobreira Maura", curso: "Engenharia Automotiva" },
    { nome: "Rafael Torres Gonzaga Parreira", curso: "Engenharia de Software" },
    { nome: "Renan Camara de Oliveira Farias", curso: "Engenharia Eletrônica" },
    { nome: "Tasso Oliveira da Rocha", curso: "Engenharia Eletrônica" },
    { nome: "Thalis Cezar Ianzner", curso: "Engenharia Eletrônica" }
  ];

  return (
    <div className={styles.PaginaHistoria}>
      <Header />

      <div className={styles.SecaoNossaHistoria}>
        <div className={styles.TextoSecao}>
          <Titulo texto="Nossa História" tamanho="35px" gradiente={false} />
          <ParagrafoPadrao texto="A Fórmula Gama Racing (FGR) é a primeira e única equipe de Fórmula SAE Elétrico do Centro-Oeste, fundada em 30 de outubro há 11 anos na Universidade de Brasília (UnB). Sua missão é impulsionar a eletromobilidade sustentável no Distrito Federal. A equipe já desenvolveu cinco protótipos elétricos, e atualmente trabalha no modelo E05, que incorpora avanços significativos em mobilidade elétrica e aerodinâmica." />
          <ParagrafoPadrao texto="A FGR conta com aproximadamente 47 membros divididos entre trainees e efetivos. A equipe possui departamentos técnicos (Mecânica e Elétrica) e administrativos (Gestão de Pessoas, Marketing, Comercial, Financeiro/Logística), sendo liderada por um Capitão, um Gerente de Projetos e uma Gerente de Departamentos." />
          <ParagrafoPadrao texto="A equipe já participou de diversas competições nacionais e internacionais, como a Fórmula SAE Brasil e a competição Formula Student, destacando-se pela inovação e performance de seus protótipos. A FGR busca, a cada edição, elevar o nível de seus veículos e consolidar a presença da universidade no cenário da engenharia automotiva sustentável." />
          
          <Titulo texto="Membros e seus Cursos" tamanho="20px" gradiente={false} />
          
          <div className={styles.MembrosContainer}>
            {membros.map((membro, index) => (
              <div key={index} className={styles.MembroItem}>
                <strong>{membro.nome}</strong> - {membro.curso}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer className={styles.Footer} />
    </div>
  );
}

export default Historia;