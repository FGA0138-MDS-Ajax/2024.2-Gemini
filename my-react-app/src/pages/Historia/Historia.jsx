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

  // Duplicamos a lista para criar um efeito de rolagem contínua
  const membrosDuplicados = [...membros, ...membros];

  return (
    <div className={styles.PaginaHistoria}>
      <Header />

      <div className={styles.SecaoNossaHistoria}>
        <div className={styles.TextoSecao}>
          <Titulo texto="Nossa História" tamanho="35px" gradiente={false} />
          <ParagrafoPadrao
            texto={`A Fórmula Gama Racing (FGR) é pioneira na engenharia de competição sustentável no Centro-Oeste, sendo a única equipe de Fórmula SAE Elétrico da região. Fundada em 30 de outubro há 11 anos na Universidade de Brasília (UnB), seu propósito é liderar a inovação na eletromobilidade, promovendo o avanço de soluções sustentáveis no Distrito Federal.`
            } />


            <ParagrafoPadrao
            texto={
            `A equipe já concebeu e desenvolveu cinco protótipos elétricos, demonstrando evolução contínua. Atualmente, o projeto está focado no modelo E05, que traz melhorias significativas em eficiência energética, desempenho aerodinâmico e otimização de sistemas elétricos. `} />


            <ParagrafoPadrao
            texto={
            `Com aproximadamente 47 membros, a FGR estrutura-se em departamentos técnicos (Mecânica e Elétrica) e administrativos (Gestão de Pessoas, Marketing, Comercial e Financeiro/Logística). A gestão da equipe é composta por um Capitão, um Gerente de Projetos e uma Gerente de Departamentos, garantindo organização e eficiência no desenvolvimento dos projetos. `} />

            <ParagrafoPadrao
            texto={
            `A equipe já marcou presença em diversas competições de renome, como a Fórmula SAE Brasil e a Formula Student internacional. Em cada edição, a FGR busca aprimorar o nível de seus veículos, destacando-se pela criatividade e excelência técnica, além de consolidar a UnB como referência no cenário da engenharia automotiva sustentável.`} />

        </div>
      </div>

      <div className={styles.MembrosSecao}>
        <Titulo texto="Membros e seus Cursos" tamanho="28px" gradiente={false} />

        <div className={styles.MembrosTextoContainer}>
          <div className={styles.MembrosLista}>
            {membrosDuplicados.map((membro, index) => (
              <span key={`${membro.nome}-${index}`} className={styles.MembroItem}>
                {membro.nome} - {membro.curso}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Footer className={styles.Footer} />
    </div>
  );
}

export default Historia;
