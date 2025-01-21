import { useState } from "react";
import styles from "./PopUpAdicionarProdutoEmDestaque.module.css";

function PopUpAdicionarProdutoEmDestaque({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    imgFrente: "",
    altFrente: "",
    imgTras: "",
    altTras: "",
    nome: "",
    preco: "",
    prestacoes: "",
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
        <h2 className={styles.TituloPopUP}>Adicionar Produto Em Destaque</h2>

        <label className={styles.Label}>
          Nome do produto:
          <input
            className={styles.CampoDeTexto}
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </label>

        <label className={styles.Label}>
          Imagem De Frente:
          <input
            className={styles.InputImagem}
            accept="image/*"
            onChange={(e) => handleImageChange(e, "imgFrente")}
          />
        </label>

        <label className={styles.Label}>
          Texto Alternativo da Imagem de Frente:
          <input
            className={styles.CampoDeTexto}
            type="text"
            name="altFrente"
            value={formData.altFrente}
            onChange={handleChange}
          />
        </label>

        <label className={styles.Label}>
          Imagem De Tras:
          <input
            className={styles.InputImagem}
            accept="image/*"
            onChange={(e) => handleImageChange(e, "imgTras")}
          />
        </label>

        <label className={styles.Label}>
        Texto Alternativo da Imagem de Tras:
          <input
            className={styles.CampoDeTexto}
            type="text"
            name="altTras"
            value={formData.altTras}
            onChange={handleChange}
          />
        </label>

        <label className={styles.Label}>
          Preço:
          <input
            className={styles.CampoDeTexto}
            type="text"
            name="preco"
            value={formData.preco}
            onChange={handleChange}
          />
        </label>

        <label className={styles.Label}>
          Prestacoes:
          <input
            className={styles.CampoDeTexto}
            type="text"
            name="prestacoes"
            value={formData.prestacoes}
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

export default PopUpAdicionarProdutoEmDestaque;
