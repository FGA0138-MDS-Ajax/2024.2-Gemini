import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProdutos } from "./api.js"; // 🔹 Importa a função da API
import "./App.css";

import { Header, CardCamiseta, Footer, Carrossel, Titulo, ParagrafoPadraoEsquerda, BotaoWhatsapp } from "./components/index.js";
import { Cadastro, Camiseta1, Camiseta2, Login, Produtos, Usuario, Carrinho, Checkout, Historia, Patrocinadores, PosVenda, RecuperarSenha } from "./pages/index.jsx";
import styles from "./App.module.css";

function App() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const carregarProdutos = async () => {
            const produtosCarregados = await fetchProdutos();
            setProdutos(produtosCarregados);
        };

        carregarProdutos();
    }, []);

    const LinksDasImagens = [
        { src: "/assets/Banners/Banner1.png", link: "", alt: "Descricao" },
        { src: "/assets/Banners/Banner2.png", link: "", alt: "Descricao" },
        { src: "/assets/Banners/Banner1.png", link: "", alt: "Descricao" },
        { src: "/assets/Banners/Banner2.png", link: "", alt: "Descricao" }
    ];

    return (
        <Router>
            <Routes>
                {/* Página Inicial */}
                <Route
                    path="/Home"
                    element={
                        <section>
                            <Header />

                            <Carrossel LinksDasImagens={LinksDasImagens} />

                            <div className={styles.CamisetasEmDestaque}>
                                {produtos.length > 0 ? (
                                    produtos.map((produto) => (
                                        <CardCamiseta
                                            key={produto.id}
                                            linkPaginaCamiseta={`/produto/${produto.id}`}
                                            imgFrente={produto.imagem} // 🔹 Ajustado para a chave correta
                                            imgTras={produto.imagem} // 🔹 Caso tenha outra imagem, ajustar a API
                                            nome={produto.nome}
                                            preco={`R$ ${parseFloat(produto.preco).toFixed(2)}`} // 🔹 Convertido para número
                                            prestacoes={`2x de R$ ${(parseFloat(produto.preco) / 2).toFixed(2)}`} // 🔹 Prestação corrigida
                                        />
                                    ))
                                ) : (
                                    <p>Carregando produtos...</p>
                                )}
                            </div>

                            <section className={styles.SecaoProjeto}>
                                <Titulo texto="Projeto" tamanho="86px" gradiente={false} />
                                <p className={styles.ParagrafoProjeto}>
                                A FGR(Fórmula Gama Racing) é uma equipe de competição de Fórmula SAE elétrico da Universidade de Brasília(UnB), campus FGA. Os discentes são responsáveis por todo o projeto e a construção do veículo. A equipe é dividida em áreas técnicas: Dinâmica Veicular, Estruturas, Eletrônica, Powertrain e Drivertrain. E também tem os departamentos: Marketing, Financeiro e Gestão de Pessoas.
                                </p>
                            </section>

                            <section className={styles.SecaoCompeticao}>
                                <div className={styles.TextosCompeticao}>
                                    <Titulo texto="Competição" tamanho="86px" gradiente={false} />
                                    <ParagrafoPadraoEsquerda
                                        texto="A competição Formula SAE BRASIL tem como objetivo proporcionar aos estudantes de Engenharia a chance de colocar em prática os conhecimentos adquiridos em sala de aula, por meio do desenvolvimento de um projeto completo: um veículo do tipo Fórmula. Por um período de três dias, ocorrem testes estáticos e dinâmicos"
                                    />
                                </div>
                                <img src="/assets/Imagens/imagemCompeticao.png" className={styles.ImagemCompeticao} />
                            </section>

                            <BotaoWhatsapp />
                            <Footer />
                        </section>
                    }
                />

                {/* Demais Rotas */}
                <Route path="/Camiseta1" element={<Camiseta1 />} />
                <Route path="/Camiseta2" element={<Camiseta2 />} />
                <Route path="/Usuario" element={<Usuario />} />
                <Route path="/Produtos" element={<Produtos />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Carrinho" element={<Carrinho />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/Historia" element={<Historia />} />
                <Route path="/Patrocinadores" element={<Patrocinadores />} />
                <Route path="/Pos-venda" element={<PosVenda />} />
                <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
            </Routes>
        </Router>
    );
}

export default App;