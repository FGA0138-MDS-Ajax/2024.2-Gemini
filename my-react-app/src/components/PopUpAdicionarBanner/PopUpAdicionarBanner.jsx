import { useState } from "react";
import styles from "./PopUpAdicionarBanner.module.css";

function PopUpAdicionarBanner({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    src: "",
    link: "",
    alt: "",
  });

  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prev) => ({
          ...prev,
          [field]: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.Overlay}>
      <div className={styles.PopUp}>
        <h2 className={styles.TituloPopUP}>Adicionar Banner</h2>


        <label className={styles.Label}>
          Imagem do Banner:
          <input
            className={styles.InputImagem}
            accept="image/*"
            onChange={(e) => handleImageChange(e, "src")}
          />
        </label>

        <label className={styles.Label}>
          Texto Alternativo:
          <input
            className={styles.CampoDeTexto}
            type="text"
            name="altFrente"
            value={formData.alt}
            onChange={handleChange}
          />
        </label>

        <label className={styles.Label}>
          Link do site:
          <input
            className={styles.CampoDeTexto}
            type="text"
            name="preco"
            value={formData.link}
            onChange={handleChange}
          />
        </label>

        <div className={styles.CampoBotoes}>
          <button className={styles.BotaoConfirmarEdicao} onClick={handleSave}>
            Confirmar Edição
          </button>
          <button className={styles.BotaoFecharEdicao} onClick={onClose}>
            <img className={styles.IconeFechar} src="assets/Icons/X.svg" alt="Fechar" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUpAdicionarBanner;
