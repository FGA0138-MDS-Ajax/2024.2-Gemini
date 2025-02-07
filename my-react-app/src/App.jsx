import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import {
  Header,
  CardCamiseta,
  Footer,
  CarrosselBanners,
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
import { ListaBanners } from "./Content/ListaBanners.js";
import { ListaProdutosEmDestaque } from "./Content/ListaProdutosEmDestaque.js";
import { ListaTextosSecoes } from "./Content/ListaTextosSecoes.js";
import { ListaImagens } from "./Content/ListaImagens.js";

function App() {

  const{Banners, setBanners} = ListaBanners();
  const{ProdutosEmDestaque, setProdutosEmDestaque} = ListaProdutosEmDestaque();
  const{TextoSecao, setTextoSecao} = ListaTextosSecoes();
  const{Imagem, setImagem} = ListaImagens();


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
                <CarrosselBanners conteudoBanners={Banners} />
                {isEditMode && (
                  <>
                    <BotaoEditarSecao
                      className={styles.BotaoEditar}
                      nome="Banners"
                      onClick={() =>
                        abrirEdicaoBanner({
                          banners: Banners,
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
                      texto={TextoSecao.projeto.titulo}
                      tamanho="86px"
                      gradiente={false}
                    />
                    <p className={styles.ParagrafoProjeto}>
                      {TextoSecao.projeto.texto}
                    </p>
                  </div>
                  {isEditMode && (
                    <>
                      <BotaoEditarSecao
                        nome="seção projeto"
                        className={styles.BotaoEditar}
                        onClick={() =>
                          abrirEdicaoSecao({
                            titulo: TextoSecao.projeto.titulo,
                            texto: TextoSecao.projeto.texto,
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
                        texto={TextoSecao.competicao.titulo}
                        tamanho="86px"
                        gradiente={false}
                      />
                      <ParagrafoPadraoEsquerda
                        texto={TextoSecao.competicao.texto}
                      />
                    </div>
                    <img
                      src={Imagem.competicao.src}
                      alt={Imagem.competicao.alt}
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
                            titulo: TextoSecao.competicao.titulo,
                            texto: TextoSecao.competicao.texto,
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
                  texto={TextoSecao.camisetasEmDestaque.titulo}
                  tamanho="86px"
                  gradiente={false}
                />

                <ParagrafoPadrao
                  texto={TextoSecao.camisetasEmDestaque.texto}
                />

                <div className={styles.CamisetasEmDestaque}>
                  {Object.entries(ProdutosEmDestaque).map(
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
                          camisetas: ProdutosEmDestaque,
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
