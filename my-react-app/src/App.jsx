import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import {
  Header,
  CardCamiseta,
  Footer,
  Carrossel,
  Titulo,
  ParagrafoPadraoEsquerda,
  BotaoWhatsapp,
  BotaoEditarSecao,
  BotaoEditarFoto,
  ParagrafoPadrao,
  PopUpEditarSecao,
  PopUpListaCamisetasEmDestaque,
  PopUpEditarListaDeBanners,
  PopUpEditarImagem,
  BotaoAdicionarBanner,
  BotaoAdicionarProdutoEmDesataque,
  PopUpAdicionarProdutoEmDestaque,
  PopUpAdicionarBanner,
} from "./components/index.js";
import {
  Cadastro,
  Camiseta1,
  Camiseta2,
  Login,
  Produtos,
  Usuario,
  Carrinho,
  Checkout,
  Historia,
  Patrocinadores,
  PosVenda,
} from "./pages/index.jsx";
import styles from "./App.module.css";
import { useConteudos } from "./conteudos.js";

function App() {
  const {
    conteudoBanners,
    conteudoSecoes,
    CamisetasEmDestaque,
    ImagensDasSecoes,
    setConteudoBanners,
    setConteudoSecoes,
    setCamisetasEmDestaque,
    setImagensDasSecoes,
  } = useConteudos();

  const LinksDasImagens = [
    { src: "/assets/Banners/Banner1.png", link: "", alt: "Descricao" },
    { src: "/assets/Banners/Banner2.png", link: "", alt: "Descricao" },
    { src: "/assets/Banners/Banner1.png", link: "", alt: "Descricao" },
    { src: "/assets/Banners/Banner2.png", link: "", alt: "Descricao" },
  ];

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const [isEditMode, setIsEditMode] = useState(false);
  const [dadosEdicao, setDadosEdicao] = useState({ tipo: null });

  const fecharPopUp = () => {
    setDadosEdicao({ tipo: null });
  };

  function abrirEdicaoSecao(dados) {
    setDadosEdicao({ ...dados, tipo: "secao" });
    setIsEditMode(true);
  }

  function abrirEdicaoImagem(dados) {
    setDadosEdicao({ ...dados, tipo: "imagem" });
    setIsEditMode(true);
  }

  function abrirEdicaoBanner(dados) {
    setDadosEdicao({ ...dados, tipo: "banner" });
    setIsEditMode(true);
  }

  function abrirEdicaoProdutosEmDestaque(dados) {
    setDadosEdicao({ ...dados, tipo: "produtos" });
    setIsEditMode(true);
  }

  function abrirAdicionarProdutosEmDestaque() {
    setDadosEdicao({ tipo: "addProdutosEmDestaque" });
    setIsEditMode(true);
  }

  function abrirAdicionarBanner() {
    setDadosEdicao({ tipo: "addBanner" });
    setIsEditMode(true);
  }

  const salvarEdicao = (dadosAtualizados) => {
    setConteudoSecoes((prevState) => ({
      ...prevState,
      projeto: {
        titulo: dadosAtualizados.conteudo.titulo,
        texto: dadosAtualizados.conteudo.texto,
      },
      competicao: {
        titulo: dadosAtualizados.conteudo.titulo,
        texto: dadosAtualizados.conteudo.texto,
      },
      camisetasEmDestaque: {
        titulo: dadosAtualizados.conteudo.titulo,
        texto: dadosAtualizados.conteudo.texto,
      },
    }));

  };

  return (
    <Router>
      <Routes>
        {/* Pagina Inicial */}
        <Route
          path="/Home"
          element={
            <section>
              <Header isEditMode={isEditMode} toggleEditMode={toggleEditMode} />

              <section className={styles.SecaoBanner}>
                <Carrossel LinksDasImagens={LinksDasImagens} />
                {isEditMode && (
                  <>
                    <BotaoEditarSecao
                      className={styles.BotaoEditar}
                      nome="Banners"
                      onClick={() =>
                        abrirEdicaoBanner({
                          banners: conteudoBanners,
                        })
                      }
                    />
                    <BotaoAdicionarBanner
                      onClick={() => abrirAdicionarBanner()}
                    />
                  </>
                )}
                {isEditMode && dadosEdicao.tipo === "banner" && (
                  <PopUpEditarListaDeBanners
                    dados={dadosEdicao}
                    onClose={fecharPopUp}
                    onSave={salvarEdicao}
                  />
                )}
                {isEditMode && dadosEdicao.tipo === "addBanner" && (
                  <PopUpAdicionarBanner
                    onClose={fecharPopUp}
                    onSave={salvarEdicao}
                  />
                )}

                <section className={styles.SecaoProjeto}>
                  <div className={styles.DivProjeto}>
                    <Titulo
                      texto={conteudoSecoes.projeto.titulo}
                      tamanho="86px"
                      gradiente={false}
                    />
                    <p className={styles.ParagrafoProjeto}>
                      {conteudoSecoes.projeto.texto}
                    </p>
                  </div>
                  {isEditMode && (
                    <>
                      <BotaoEditarSecao
                        nome="seção projeto"
                        className={styles.BotaoEditar}
                        onClick={() =>
                          abrirEdicaoSecao({
                            titulo: conteudoSecoes.projeto.titulo,
                            texto: conteudoSecoes.projeto.texto,
                          })
                        }
                      />
                    </>
                  )}
                  {isEditMode && dadosEdicao.tipo === "secao" && (
                    <PopUpEditarSecao
                      dados={dadosEdicao}
                      onClose={fecharPopUp}
                      onSave={salvarEdicao}
                    />
                  )}
                </section>

                <section className={styles.SecaoCompeticao}>
                  <div className={styles.DivCompeticao}>
                    <div className={styles.TextosCompeticao}>
                      <Titulo
                        texto={conteudoSecoes.competicao.titulo}
                        tamanho="86px"
                        gradiente={false}
                      />
                      <ParagrafoPadraoEsquerda
                        texto={conteudoSecoes.competicao.texto}
                      />
                    </div>
                    <img
                      src={ImagensDasSecoes.competicao.src}
                      alt={ImagensDasSecoes.competicao.alt}
                      className={styles.ImagemCompeticao}
                    />
                  </div>

                  {isEditMode && (
                    <>
                      <BotaoEditarSecao
                        className={styles.BotaoEditar}
                        nome="seção competição"
                        onClick={() =>
                          abrirEdicaoSecao({
                            titulo: conteudoSecoes.competicao.titulo,
                            texto: conteudoSecoes.competicao.texto,
                          })
                        }
                      />
                      <BotaoEditarFoto
                        onClick={() =>
                          abrirEdicaoImagem({
                            src: ImagensDasSecoes.competicao.src,
                            alt: ImagensDasSecoes.competicao.alt,
                          })
                        }
                      />
                    </>
                  )}
                  {isEditMode && dadosEdicao.tipo === "secao" && (
                    <PopUpEditarSecao
                      dados={dadosEdicao}
                      onClose={fecharPopUp}
                      onSave={salvarEdicao}
                    />
                  )}
                  {isEditMode && dadosEdicao.tipo === "imagem" && (
                    <PopUpEditarImagem
                      dados={dadosEdicao}
                      onClose={fecharPopUp}
                      onSave={salvarEdicao}
                    />
                  )}
                </section>
              </section>

              <section className={styles.SecaoCamisetasEmDestaque}>
                <Titulo
                  texto={conteudoSecoes.camisetasEmDestaque.titulo}
                  tamanho="86px"
                  gradiente={false}
                />

                <ParagrafoPadrao
                  texto={conteudoSecoes.camisetasEmDestaque.texto}
                />

                <div className={styles.CamisetasEmDestaque}>
                  {Object.entries(CamisetasEmDestaque).map(
                    ([key, camiseta]) => (
                      <CardCamiseta
                        linkPaginaCamiseta={camiseta.linkPaginaCamiseta}
                        imgFrente={camiseta.imgFrente}
                        imgTras={camiseta.imgTras}
                        nome={camiseta.nome}
                        preco={camiseta.preco}
                        prestacoes={camiseta.prestacoes}
                      />
                    )
                  )}
                </div>
                {isEditMode && (
                  <>
                    <BotaoEditarSecao
                      className={styles.BotaoEditar}
                      nome="produtos em destaque"
                      onClick={() =>
                        abrirEdicaoProdutosEmDestaque({
                          titulo: conteudoSecoes.camisetasEmDestaque.titulo,
                          texto: conteudoSecoes.camisetasEmDestaque.texto,
                          camisetas: CamisetasEmDestaque,
                        })
                      }
                    />
                    <BotaoAdicionarProdutoEmDesataque
                      onClick={() => abrirAdicionarProdutosEmDestaque()}
                    />
                  </>
                )}
                {isEditMode && dadosEdicao.tipo === "produtos" && (
                  <PopUpListaCamisetasEmDestaque
                    dados={dadosEdicao}
                    onClose={fecharPopUp}
                    onSave={salvarEdicao}
                  />
                )}
                {isEditMode && dadosEdicao.tipo === "addProdutosEmDestaque" && (
                  <PopUpAdicionarProdutoEmDestaque
                    onClose={fecharPopUp}
                    onSave={salvarEdicao}
                  />
                )}
              </section>

              <BotaoWhatsapp />

              <Footer />
            </section>
          }
        />
        {/* Outras Rotas */}
        <Route path="/Camiseta1" element={<Camiseta1 />} />{" "}
        {/* Pagina Camiseta 1*/}
        <Route path="/Camiseta2" element={<Camiseta2 />} />{" "}
        {/* Pagina Camiseta 2*/}
        <Route path="/Usuario" element={<Usuario />} /> {/* Pagina Usuario*/}
        <Route path="/Produtos" element={<Produtos />} /> {/* Pagina Produtos*/}
        <Route path="/Cadastro" element={<Cadastro />} /> {/* Pagina Cadastro*/}
        <Route path="/Login" element={<Login />} /> {/* Pagina Login*/}
        <Route path="/Carrinho" element={<Carrinho />} /> {/* Pagina Carrinho*/}
        <Route path="/Checkout" element={<Checkout />} /> {/* Pagina Checkout*/}
        <Route path="/Historia" element={<Historia />} /> {/* Pagina Historia*/}
        <Route path="/Patrocinadores" element={<Patrocinadores />} />{" "}
        {/* Pagina Patrocinadores*/}
        <Route path="/Pos-venda" element={<PosVenda />} />{" "}
        {/* Pagina Pos-venda*/}
      </Routes>
    </Router>
  );
}

export default App;
