import { useState } from "react";
import {
  Header,
  FooterDeVendas,
  CardCamiseta,
  Titulo,
  BotaoWhatsapp,
  BotaoEditarSecao,
  PopUpEditarListaDeProdutos,
  BotaoAdicionarProduto,
  PopUpAdicionarProduto
} from "../../components/index.js";
import styles from "./Produtos.module.css";
import { useConteudos } from "../../conteudos.js";

function PaginaProdutos() {
  const [isEditMode, setIsEditMode] = useState(false)
  const [dadosEdicao, setDadosEdicao] = useState({})

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const abrirPopUp = (dados) => {
    setDadosEdicao(dados);
    setIsEditMode(true);
  };

  const fecharPopUp = () => {
    setIsEditMode(false);
    setDadosEdicao({});
  };

  const salvarEdicao = (dadosEditados) => {
    console.log("Dados salvos:", dadosEditados);
    const { conteudo } = dadosEditados;
    setConteudoSecoes((prev) => ({
      ...prev,
    }));
  };

  function abrirAdicionarProdutos(){
    setDadosEdicao({tipo: 'addProdutos'})
    setIsEditMode(true)
  }


  const {
    CamisetasEmDestaque,
    setConteudoSecoes,
  } = useConteudos();

  return (
    <section className={styles.Produtos}>
      <Header isEditMode={isEditMode} toggleEditMode={toggleEditMode} />

      <div className={styles.Titulos}>
        <Titulo texto="Produtos" tamanho="64px" gradiente={false} />
        <h1 className={styles.TituloFiltrar}>
          {" "}
          <img src="/assets/Icons/Filter.svg" alt="" />
          Filtrar
        </h1>
      </div>

      <div className={styles.ProdutosGrid}>
        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaMCLaren.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaMCLaren.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaMCLaren.imgTras}
          nome={CamisetasEmDestaque.camisetaMCLaren.nome}
          preco={CamisetasEmDestaque.camisetaMCLaren.preco}
          prestacoes={CamisetasEmDestaque.camisetaMCLaren.prestacoes}
        />
        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaRedBull.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaRedBull.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaRedBull.imgTras}
          nome={CamisetasEmDestaque.camisetaRedBull.nome}
          preco={CamisetasEmDestaque.camisetaRedBull.preco}
          prestacoes={CamisetasEmDestaque.camisetaRedBull.prestacoes}
        />
        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaMCLaren.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaMCLaren.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaMCLaren.imgTras}
          nome={CamisetasEmDestaque.camisetaMCLaren.nome}
          preco={CamisetasEmDestaque.camisetaMCLaren.preco}
          prestacoes={CamisetasEmDestaque.camisetaMCLaren.prestacoes}
        />
        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaRedBull.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaRedBull.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaRedBull.imgTras}
          nome={CamisetasEmDestaque.camisetaRedBull.nome}
          preco={CamisetasEmDestaque.camisetaRedBull.preco}
          prestacoes={CamisetasEmDestaque.camisetaRedBull.prestacoes}
        />

        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaMCLaren.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaMCLaren.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaMCLaren.imgTras}
          nome={CamisetasEmDestaque.camisetaMCLaren.nome}
          preco={CamisetasEmDestaque.camisetaMCLaren.preco}
          prestacoes={CamisetasEmDestaque.camisetaMCLaren.prestacoes}
        />
        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaRedBull.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaRedBull.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaRedBull.imgTras}
          nome={CamisetasEmDestaque.camisetaRedBull.nome}
          preco={CamisetasEmDestaque.camisetaRedBull.preco}
          prestacoes={CamisetasEmDestaque.camisetaRedBull.prestacoes}
        />
        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaMCLaren.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaMCLaren.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaMCLaren.imgTras}
          nome={CamisetasEmDestaque.camisetaMCLaren.nome}
          preco={CamisetasEmDestaque.camisetaMCLaren.preco}
          prestacoes={CamisetasEmDestaque.camisetaMCLaren.prestacoes}
        />
        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaRedBull.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaRedBull.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaRedBull.imgTras}
          nome={CamisetasEmDestaque.camisetaRedBull.nome}
          preco={CamisetasEmDestaque.camisetaRedBull.preco}
          prestacoes={CamisetasEmDestaque.camisetaRedBull.prestacoes}
        />

        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaMCLaren.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaMCLaren.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaMCLaren.imgTras}
          nome={CamisetasEmDestaque.camisetaMCLaren.nome}
          preco={CamisetasEmDestaque.camisetaMCLaren.preco}
          prestacoes={CamisetasEmDestaque.camisetaMCLaren.prestacoes}
        />
        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaRedBull.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaRedBull.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaRedBull.imgTras}
          nome={CamisetasEmDestaque.camisetaRedBull.nome}
          preco={CamisetasEmDestaque.camisetaRedBull.preco}
          prestacoes={CamisetasEmDestaque.camisetaRedBull.prestacoes}
        />
        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaMCLaren.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaMCLaren.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaMCLaren.imgTras}
          nome={CamisetasEmDestaque.camisetaMCLaren.nome}
          preco={CamisetasEmDestaque.camisetaMCLaren.preco}
          prestacoes={CamisetasEmDestaque.camisetaMCLaren.prestacoes}
        />
        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaRedBull.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaRedBull.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaRedBull.imgTras}
          nome={CamisetasEmDestaque.camisetaRedBull.nome}
          preco={CamisetasEmDestaque.camisetaRedBull.preco}
          prestacoes={CamisetasEmDestaque.camisetaRedBull.prestacoes}
        />

        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaMCLaren.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaMCLaren.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaMCLaren.imgTras}
          nome={CamisetasEmDestaque.camisetaMCLaren.nome}
          preco={CamisetasEmDestaque.camisetaMCLaren.preco}
          prestacoes={CamisetasEmDestaque.camisetaMCLaren.prestacoes}
        />
        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaRedBull.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaRedBull.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaRedBull.imgTras}
          nome={CamisetasEmDestaque.camisetaRedBull.nome}
          preco={CamisetasEmDestaque.camisetaRedBull.preco}
          prestacoes={CamisetasEmDestaque.camisetaRedBull.prestacoes}
        />
        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaMCLaren.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaMCLaren.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaMCLaren.imgTras}
          nome={CamisetasEmDestaque.camisetaMCLaren.nome}
          preco={CamisetasEmDestaque.camisetaMCLaren.preco}
          prestacoes={CamisetasEmDestaque.camisetaMCLaren.prestacoes}
        />
        <CardCamiseta
          linkPaginaCamiseta={
            CamisetasEmDestaque.camisetaRedBull.linkPaginaCamiseta
          }
          imgFrente={CamisetasEmDestaque.camisetaRedBull.imgFrente}
          imgTras={CamisetasEmDestaque.camisetaRedBull.imgTras}
          nome={CamisetasEmDestaque.camisetaRedBull.nome}
          preco={CamisetasEmDestaque.camisetaRedBull.preco}
          prestacoes={CamisetasEmDestaque.camisetaRedBull.prestacoes}
        />
      </div>

      {isEditMode && (
                  <>
                    <BotaoEditarSecao
                      className={styles.BotaoEditar}
                      nome="lista de produtos"
                      onClick={() =>
                        abrirPopUp({
                          camisetas: CamisetasEmDestaque
                        })
                      }
                    />
                    <BotaoAdicionarProduto onClick={() => abrirAdicionarProdutos()}/>
                  </>
                )}

        {isEditMode && dadosEdicao.camisetas && (
          <PopUpEditarListaDeProdutos
          dados={dadosEdicao}
          onClose={fecharPopUp}
          onSave={salvarEdicao}
          />
        )}

{isEditMode && dadosEdicao.tipo === 'addProdutos' && (
                  <PopUpAdicionarProduto
                    onClose={fecharPopUp}
                    onSave={salvarEdicao}
                  />
                )}

      <BotaoWhatsapp />

      <FooterDeVendas />
    </section>
  );
}

export default PaginaProdutos;
