import {useState} from 'react';
import { Header, FooterDeVendas, MenuCamiseta, BotaoWhatsapp, BotaoEditarSecao, PopUpEditarProduto } from '../../components/index.js';
import styles from './Camiseta.module.css'
import { ListaProdutos } from "../../Content/ListaProdutos.js";

function PaginaCamiseta1() {

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

      <MenuCamiseta produtos={Produtos.camisetaMCLaren}/>

      {isEditMode &&(
        <>
          <BotaoEditarSecao className={styles.BotaoEditar}
          nome="camiseta"
          onClick={() => 
            abrirEdicaoProduto({
              imgFrente: Produtos.camisetaMCLaren.imgFrente,
              altFrente: Produtos.camisetaMCLaren.altFrente,
              imgTras: Produtos.camisetaMCLaren.imgTras,
              altTras: Produtos.camisetaMCLaren.altTras,
              nome: Produtos.camisetaMCLaren.nome,
              preco: Produtos.camisetaMCLaren.preco,
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

export default PaginaCamiseta1