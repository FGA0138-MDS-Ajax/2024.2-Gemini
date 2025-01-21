import { useState, useEffect } from "react";
import styles from "./PopUpEditarImagem.module.css";

function PopUpEditarImagem({ dados, onClose, onSave }) {
  const [formData, setFormData] = useState({
    src: "",
    alt: "",
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
        <h2 className={styles.TituloPopUp}>Editar Imagem</h2>
        <label className={styles.Label}>
          <div className={styles.PreviewImagem}>
            <img
              className={styles.ImagemSecao}
              src={formData.src || ""}
              alt={formData.alt || ""}
            />
          </div>
        </label>
        <label className={styles.Label}>
          Texto Alternativo:
          <textarea
            className={styles.CampoDeTexto}
            name="alt"
            value={formData.alt || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, alt: e.target.value }))
            }
          />
        </label>
        <label className={styles.Label}>
          Nova Imagem:
          <input
            type="file"
            className={styles.InputImagem}
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                  setFormData((prev) => ({
                    ...prev,
                    src: event.target.result,
                  }));
                };
                reader.readAsDataURL(file);
              }
            }}
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

export default PopUpEditarImagem;
