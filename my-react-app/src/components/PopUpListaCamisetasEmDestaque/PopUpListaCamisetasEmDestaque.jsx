import { useState, useEffect } from "react";
import styles from "./PopUpListaCamisetasEmDestaque.module.css";

function PopUpListaCamisetasEmDestaque({ dados, onClose, onSave }) {
  const [formData, setFormData] = useState({
    titulo: "",
    texto: "",
    camisetas: [], // Lista de camisetas em destaque
    camisetaSelecionada: null, // Adicionado explicitamente
  });

  useEffect(() => {
    setFormData(dados || { titulo: "", texto: "" });
  }, [dados]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave({ conteudo: formData });
    onClose();
  };

  return (
    <div className={styles.Overlay}>
      <div className={styles.PopUp}>
        <h2 className={styles.TituloPopUp}>Lista De Camisetas Em Destaque</h2>

        <label className={styles.Label}>
          Título:
          <textarea
            className={styles.CampoDeTexto}
            type="text"
            name="titulo"
            value={formData.titulo || ""}
            onChange={handleChange}
          />
        </label>

        <label className={styles.Label}>
          Texto:
          <textarea
            className={styles.CampoDeTexto}
            name="texto"
            value={formData.texto || ""}
            onChange={handleChange}
          />
        </label>

        <div className={styles.ListaCamisetas}>
            {Object.entries(formData.camisetas || {}).map(
                ([key, camiseta]) => (
                    <div key={key} className={styles.ItemCamiseta}>
                        <div className={styles.PreviewCamiseta}>
                            <img
                                className={styles.ImgCamiseta}
                                src={camiseta.imgFrente}
                                alt={`${camiseta.nome} Frente`}
                            />
                            <img
                                className={styles.ImgCamiseta}
                                src={camiseta.imgTras}
                                alt={`${camiseta.nome} Trás`}
                            />
                            <div className={styles.InfoCamiseta}>
                            <h3 className={styles.NomeCamiseta}>
                                Nome do produto: {camiseta.nome}
                            </h3>
                            <p className={styles.PrecoCamiseta}>
                                Preço: {camiseta.preco}
                            </p>
                            <p className={styles.PrestacoesCamiseta}>
                                Prestações: {camiseta.prestacoes}
                            </p>
                            <div className={styles.BotoesCamiseta}>
                              <button className={styles.BotoesDaCamiseta}>
                                Editar Camiseta
                              </button>
                              <button className={styles.BotoesDaCamiseta}>
                                Excluir da Lista
                              </button>
                            </div>
                        </div>
                        </div>
                    </div>                    
                )
            )}
        </div>

        <div className={styles.CampoBotoes}>
          <button className={styles.BotaoAdicionarProduto}> Adicionar Produto</button>
          <button className={styles.BotaoConfirmarEdicao} onClick={handleSave}>
            Confirmar Edição
          </button>
          <button className={styles.BotaoFecharEdicao} onClick={onClose}>
            <img className={styles.IconeFechar} src="assets/Icons/X.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUpListaCamisetasEmDestaque;