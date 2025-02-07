import { useState } from 'react';
import { Header, Footer, Titulo, ParagrafoPadrao, BotaoEditarSecao, BotaoEditarFoto, PopUpEditarSecao } from '../../components/index.js';
import styles from './Historia.module.css'
import { ListaTextosSecoes } from "../../Content/ListaTextosSecoes.js";

function Historia() {

  const [isEditMode, setIsEditMode] = useState(false)
  const [dadosEdicao, setDadosEdicao] = useState({})

  const{TextoSecao, setTextoSecao} = ListaTextosSecoes();

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

    const salvarEdicao = (dadosAtualizados) => {
      setConteudoSecoes((prevState) => ({
        ...prevState,
        historia: {
          titulo: dadosAtualizados.conteudo.titulo,
          texto: dadosAtualizados.conteudo.texto,
        },
      }))
     }

    return (

      <div className={styles.PaginaHistoria}>
        <Header isEditMode={isEditMode} toggleEditMode={toggleEditMode} />

        <div className={styles.SecaoNossaHistoria}>

          <Titulo texto={TextoSecao.historia.titulo} tamanho="86px" />
          <ParagrafoPadrao texto={TextoSecao.historia.texto} />

          {isEditMode && (
            <>
              <BotaoEditarSecao
                nome="nossa história"
                className={styles.BotaoEditar}
                onClick={() =>
                  abrirPopUp({
                    titulo: TextoSecao.historia.titulo,
                    texto: TextoSecao.historia.texto,
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