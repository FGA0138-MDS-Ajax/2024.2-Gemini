import { useState } from 'react';
import { Header, Footer, Titulo, ParagrafoPadrao, BotaoEditarSecao, BotaoEditarFoto, PopUpEditarSecao } from '../../components/index.js';
import styles from './Historia.module.css'
import { useConteudos } from "../../conteudos.js";

function Historia() {

  const [isEditMode, setIsEditMode] = useState(false)
  const [dadosEdicao, setDadosEdicao] = useState({})

  const {
    conteudoSecoes,
    setConteudoSecoes,
  } = useConteudos();

    const toggleEditMode = () => {
      setIsEditMode(!isEditMode);
    };

    const abrirPopUp = (dados) => {
      setDadosEdicao(dados);
      setIsEditMode(true);
    };

    const fecharPopUp = () => {
      setDadosEdicao({});
      setTipoEdicao(null);
    }

    const salvarEdicao = (dadosEditados) => {
      console.log("Dados salvos:", dadosEditados);
      const { conteudo } = dadosEditados;
      setConteudoSecoes((prev) => ({
        ...prev,
      }));
    };

    return (

      <div className={styles.PaginaHistoria}>
        <Header isEditMode={isEditMode} toggleEditMode={toggleEditMode} />

        <div className={styles.SecaoNossaHistoria}>

          <Titulo texto={conteudoSecoes.historia.titulo} tamanho="86px" gradiente={false} />
          <ParagrafoPadrao texto={conteudoSecoes.historia.texto} />

          {isEditMode && (
            <>
              <BotaoEditarSecao
                className={styles.BotaoEditar}
                onClick={() =>
                  abrirPopUp({
                    titulo: conteudoSecoes.historia.titulo,
                    texto: conteudoSecoes.historia.texto,
                  })
                }
              />
              <BotaoEditarFoto />
            </>
          )}

          {isEditMode && dadosEdicao.titulo && (
            <PopUpEditarSecao
              dados={dadosEdicao}
              onClose={fecharPopUp}
              onSave={salvarEdicao}
            />
          )}

        </div>

        <Footer />

      </div>
    )
  }

  export default Historia