import { useEffect, useState } from "react";
import { fetchProdutos } from "../../api.js"; // 🔹 Importa a função da API
import {
  Header,
  FooterDeVendas,
  CardCamiseta,
  Titulo,
  BotaoWhatsapp,
} from "../../components/index.js";
import styles from "./Produtos.module.css";

function PaginaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const produtosCarregados = await fetchProdutos(); // 🔹 Busca os produtos da API
        setProdutos(produtosCarregados);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    carregarProdutos();
  }, []);

  return (
    <section className={styles.Produtos}>
      <Header />

      <div className={styles.Titulos}>
        <Titulo texto="Produtos" tamanho="64px" gradiente={false} />
        <h1 className={styles.TituloFiltrar}>
          <img src="/assets/Icons/Filter.svg" alt="" />
          Filtrar
        </h1>
      </div>

      <div className={styles.ProdutosGrid}>
        {loading ? (
          <p>Carregando produtos...</p>
        ) : produtos.length > 0 ? (
          produtos.map((produto) => (
            <CardCamiseta
              key={produto.id}
              linkPaginaCamiseta={`/produto/${produto.id}`}
              imgFrente={produto.imagem}
              imgTras={produto.imagem}
              nome={produto.nome}
              preco={`R$ ${parseFloat(produto.preco).toFixed(2)}`}
              prestacoes={`2x de R$ ${(parseFloat(produto.preco) / 2).toFixed(2)}`}
            />
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>

      <BotaoWhatsapp />
      <FooterDeVendas />
    </section>
  );
}

export default PaginaProdutos;
