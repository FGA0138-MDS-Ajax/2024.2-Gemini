import {useState} from 'react';
import { Header, FooterDeVendas, MenuCamiseta, BotaoWhatsapp, BotaoEditarSecao, PopUpEditarProduto } from '../../components/index.js';
import styles from './Camiseta.module.css'
import { ListaProdutos } from "../../Content/ListaProdutos.js";

function PaginaCamiseta2() {

  const [isEditMode, setIsEditMode] = useState(false)
  const [dadosEdicao, setDadosEdicao] = useState({tipo: null});
  const { Produtos, setProdutos} = ListaProdutos();

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  const fecharPopUp = () => {
    setIsEditMode(false);
    setDadosEdicao({tipo: null});
  };

  const salvarEdicao = (dadosEditados) => {
    console.log("Dados salvos:", dadosEditados);
    const { conteudo } = dadosEditados;
    setConteudoSecoes((prev) => ({
      ...prev,
    }));
  };

  function abrirEdicaoProduto(dados) {
    setDadosEdicao({ ...dados, tipo: 'produto' });
    setIsEditMode(true);
  }

  return(

    <div className={styles.PaginaCamiseta}>
      <Header isEditMode={isEditMode} toggleEditMode={toggleEditMode}/>

      <MenuCamiseta produtos = {Produtos.camisetaRedBull}/>

      {isEditMode &&(
              <>
                <BotaoEditarSecao className={styles.BotaoEditar}
                nome="camiseta"
                onClick={() => 
                  abrirEdicaoProduto({
                    imgFrente: Produtos.camisetaRedBull.imgFrente,
                    altFrente: Produtos.camisetaRedBull.altFrente,
                    imgTras: Produtos.camisetaRedBull.imgTras,
                    altTras: Produtos.camisetaRedBull.altTras,
                    nome: Produtos.camisetaRedBull.nome,
                    preco: Produtos.camisetaRedBull.preco,
                  })
                }
                />
              </>
            )}
            {isEditMode && dadosEdicao.tipo === 'produto' &&(
              <PopUpEditarProduto
                dados={dadosEdicao}
                onClose={fecharPopUp}
                onSave={salvarEdicao}
              />
            )}

      <BotaoWhatsapp/>
  
      <FooterDeVendas/>

    </div>
  )
}

export default PaginaCamiseta2