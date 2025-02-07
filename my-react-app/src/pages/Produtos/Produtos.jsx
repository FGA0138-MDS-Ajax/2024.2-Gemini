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
  PopUpAdicionarProduto,
} from "../../components/index.js";
import styles from "./Produtos.module.css";
import { ListaProdutosEmDestaque } from "../../Content/ListaProdutosEmDestaque.js";

function PaginaProdutos() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [dadosEdicao, setDadosEdicao] = useState({});
  const { ProdutosEmDestaque, setProdutosEmDestaque} = ListaProdutosEmDestaque();

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

  function abrirAdicionarProdutos() {
    setDadosEdicao({ tipo: "addProdutos" });
    setIsEditMode(true);
  }

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
        {Object.entries(ProdutosEmDestaque).map(([key, camiseta]) => (
          <CardCamiseta
            linkPaginaCamiseta={camiseta.linkPaginaCamiseta}
            imgFrente={camiseta.imgFrente}
            imgTras={camiseta.imgTras}
            nome={camiseta.nome}
            preco={camiseta.preco}
            prestacoes={camiseta.prestacoes}
          />
        ))}
      </div>

      {isEditMode && (
        <>
          <BotaoEditarSecao
            className={styles.BotaoEditar}
            nome="lista de produtos"
            onClick={() =>
              abrirPopUp({
                camisetas: CamisetasEmDestaque,
              })
            }
          />
          <BotaoAdicionarProduto onClick={() => abrirAdicionarProdutos()} />
        </>
      )}

      {isEditMode && dadosEdicao.camisetas && (
        <PopUpEditarListaDeProdutos
          dados={dadosEdicao}
          onClose={fecharPopUp}
          onSave={salvarEdicao}
        />
      )}

      {isEditMode && dadosEdicao.tipo === "addProdutos" && (
        <PopUpAdicionarProduto onClose={fecharPopUp} onSave={salvarEdicao} />
      )}

      <BotaoWhatsapp />

      <FooterDeVendas />
    </section>
  );
}

export default PaginaProdutos;
