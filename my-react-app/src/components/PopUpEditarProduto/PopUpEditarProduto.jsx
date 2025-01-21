import { useState, useEffect } from "react";
import styles from "./PopUpEditarProduto.module.css";

function PopUpEditarProduto({ dados, onClose, onSave }) {
  const [formData, setFormData] = useState({
    imgFrente: "",
    altFrente: "",
    imgTras: "",
    altTras: "",
    nome: "",
    preco: ""
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
        <h2 className={styles.TituloPopUp}>Editar Produto</h2>
        <label className={styles.Label}>
          <div className={styles.PreviewCamiseta}>
            <img
              className={styles.ImgCamiseta}
              src={formData.imgFrente || ""}
              alt={formData.altFrente || ""}
            />
            <img
              className={styles.ImgCamiseta}
              src={formData.imgTras || ""}
              alt={formData.imgTras || ""}
            />
          </div>
        </label>
        <label className={styles.Label}>
          Nome:
          <textarea
            className={styles.CampoDeTexto}
            name="alt"
            value={formData.nome || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, alt: e.target.value }))
            }
          />
        </label>
        <label className={styles.Label}>
          Preco:
          <textarea
            className={styles.CampoDeTexto}
            name="alt"
            value={formData.preco || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, alt: e.target.value }))
            }
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

export default PopUpEditarProduto;
