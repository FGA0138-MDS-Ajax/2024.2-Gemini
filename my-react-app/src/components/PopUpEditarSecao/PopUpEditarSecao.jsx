import { useState, useEffect } from "react";
import styles from "./PopUpEditarSecao.module.css";

function PopUpEditarSecao({ dados, onClose, onSave }) {
  const [formData, setFormData] = useState({
    titulo: "",
    texto: "",
  });

  useEffect(() => {
    setFormData(dados || { titulo: "", texto: "" });
  }, [dados]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave({conteudo: formData });
    onClose();
  };

  return (
    <div className={styles.Overlay}>
      <div className={styles.PopUp}>
        <h2 className={styles.TituloPopUp}>Editar Seção</h2>
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

export default PopUpEditarSecao;
