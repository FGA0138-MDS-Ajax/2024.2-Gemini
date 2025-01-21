import { useState } from "react";

export const useConteudos = () => {
  const [conteudoBanners, setConteudoBanners] = useState({
    banner1: {
      src: "/assets/Banners/Banner1.png",
      link: "",
      alt: "descricao",
    },
    banner2: {
      src: "/assets/Banners/Banner2.png",
      link: "",
      alt: "descricao",
    },
    banner3: {
      src: "/assets/Banners/Banner1.png",
      link: "",
      alt: "descricao",
    },
    banner4: {
      src: "/assets/Banners/Banner2.png",
      link: "",
      alt: "descricao",
    },
  });

  const [conteudoSecoes, setConteudoSecoes] = useState({
    projeto: {
      titulo: "Projeto",
      texto:
        "A FGR(Fórmula Gama Racing) é uma equipe de competição de Fórmula SAE elétrico da Universidade de Brasília(UnB), campus FGA. Os discentes são responsáveis por todo o projeto e a construção do veículo. A equipe é dividida em áreas técnicas: Dinâmica Veicular, Estruturas, Eletrônica, Powertrain e Drivertrain. E também tem os departamentos: Marketing, Financeiro e Gestão de Pessoas.",
    },
    competicao: {
      titulo: "Competição",
      texto:
        "A competição Formula SAE BRASIL tem como objetivo proporcionar aos estudantes de Engenharia a chance de colocar em prática os conhecimentos adquiridos em sala de aula, por meio do desenvolvimento de um projeto completo: um veículo do tipo Fórmula. Por um período de três dias, ocorrem testes estáticos e dinâmicos com os carros, com o objetivo de avaliar o desempenho de cada projeto na pista. Além disso, as equipes apresentam suas propostas técnicas, incluindo detalhes sobre o projeto, custos e também uma apresentação de marketing.",
    },
    camisetasEmDestaque: {
      titulo: "Camisetas Em Destaque",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus consectetur felis. Integer ut ex posuere, laoreet massa et, pretium quam. Morbi dolor nunc, convallis non rutrum vel, ornare lobortis erat. Ut tristique fringilla lectus. Donec sed aliquet lorem. Duis in sollicitudin purus, vulputate fringilla tellus. Ut in tristique risus, non luctus risus. Donec lorem erat, egestas in mattis at, posuere venenatis felis. Fusce bibendum finibus gravida. Ut finibus mauris eget facilisis elementum.",
    },
    historia: {
      titulo: "Nossa História",
      texto: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus consectetur felis. Integer ut ex posuere, laoreet massa et, pretium quam. Morbi dolor nunc, convallis non rutrum vel, ornare lobortis erat. Ut tristique fringilla lectus. Donec sed aliquet lorem. Duis in sollicitudin purus, vulputate fringilla tellus. Ut in tristique risus, non luctus risus. Donec lorem erat, egestas in mattis at, posuere venenatis felis. Fusce bibendum finibus gravida. Ut finibus mauris eget facilisis elementum.",
    }
  });

  const [CamisetasEmDestaque, setCamisetasEmDestaque] = useState({
    camisetaRedBull: {
      imgFrente: "/assets/Camisetas/CamisetaRedbull.png",
      imgTras: "/assets/Camisetas/CamisetaRedbull.png",
      nome: "RIVALS COLLECTIONS 2024 | REDBULL",
      preco: "R$ 59,99",
      prestacoes: "2x de r$ 29,99",
      linkPaginaCamiseta: "/Camiseta2",
    },
    camisetaMCLaren: {
      imgFrente: "/assets/Camisetas/CamisetaMCLaren.png",
      imgTras: "/assets/Camisetas/CamisetaRedbull.png",
      nome: "RIVALS COLLECTIONS 2024 | MCLAREN",
      preco: "R$ 59,99",
      prestacoes: "2x de r$ 29,99",
      linkPaginaCamiseta: "/Camiseta1",
    },
  });

  const [ImagensDasSecoes, setImagensDasSecoes] = useState({
    competicao: {
      src: "/assets/Imagens/imagemCompeticao.png",
      alt: "alt",
    },
  });

  const [produtos, setProdutos] = useState({
    camisetaRedBull: {
      imgFrente: "/assets/Camisetas/CamisetaRedbull.png",
      altFrente: "alt",
      imgTras: "/assets/Camisetas/CamisetaRedbull.png",
      altTras: "alt",
      nome: "RIVALS COLLECTIONS 2024 | REDBULL",
      preco: "R$ 59,99",
    },
    camisetaMCLaren: {
      imgFrente: "/assets/Camisetas/CamisetaMCLaren.png",
      altFrente: "alt",
      imgTras: "/assets/Camisetas/CamisetaRedbull.png",
      altTras: "alt",
      nome: "RIVALS COLLECTIONS 2024 | MCLAREN",
      preco: "R$ 59,99",
    },
  });

  return {
    conteudoBanners,
    conteudoSecoes,
    CamisetasEmDestaque,
    ImagensDasSecoes,
    setConteudoBanners,
    setConteudoSecoes,
    setCamisetasEmDestaque,
    setImagensDasSecoes,
    produtos,
    setProdutos,
  };
};