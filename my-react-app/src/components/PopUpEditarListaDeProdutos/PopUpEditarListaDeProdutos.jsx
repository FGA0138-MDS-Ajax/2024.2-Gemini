import { useState, useEffect } from "react";
import styles from "./PopUpEditarListaDeProdutos.module.css";

function PopUpEditarListaDeProdutos({ dados, onClose, onSave }) {
  const [formData, setFormData] = useState({
    camisetas: [],
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
        <h2 className={styles.TituloPopUp}>Editar Seção</h2>
        <div className={styles.ListaCamisetas}>
          {Object.entries(formData.camisetas || {}).map(
            ([key, camiseta], index) => (
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
                    <h3 className={styles.InformacaoCamiseta}>
                      Nome do produto: {camiseta.nome}
                    </h3>
                    <p className={styles.InformacaoCamiseta}>
                      Preço: {camiseta.preco}
                    </p>
                    <p className={styles.InformacaoCamiseta}>
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

export default PopUpEditarListaDeProdutos;


