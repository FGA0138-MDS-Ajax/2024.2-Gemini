import {useState} from 'react';
import { Header, FooterDeVendas, MenuCamiseta, BotaoWhatsapp, BotaoEditarSecao, PopUpEditarProduto } from '../../components/index.js';
import styles from './Camiseta.module.css'
import { useConteudos } from "../../conteudos.js";

function PaginaCamiseta1() {

  const [isEditMode, setIsEditMode] = useState(false)
  const [dadosEdicao, setDadosEdicao] = useState({tipo: null});

  const {
    produtos,
    setProdutos,
  } = useConteudos();

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

      <MenuCamiseta
        imgSrc= {produtos.camisetaMCLaren.imgFrente}
        nome = {produtos.camisetaMCLaren.nome}
        preco= {produtos.camisetaMCLaren.preco}/>

      {isEditMode &&(
        <>
          <BotaoEditarSecao className={styles.BotaoEditar}
          onClick={() => 
            abrirEdicaoProduto({
              imgFrente: produtos.camisetaMCLaren.imgFrente,
              altFrente: produtos.camisetaMCLaren.altFrente,
              imgTras: produtos.camisetaMCLaren.imgTras,
              altTras: produtos.camisetaMCLaren.altTras,
              nome: produtos.camisetaMCLaren.nome,
              preco: produtos.camisetaMCLaren.preco,
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