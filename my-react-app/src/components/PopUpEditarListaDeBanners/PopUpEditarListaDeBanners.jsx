import { useState, useEffect } from "react";
import styles from "./PopUpEditarListaDeBanners.module.css";

function PopUpEditarListaDeBanners({ dados, onClose, onSave }) {
  const [formData, setFormData] = useState({
    banners: [],
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
        <h2 className={styles.TituloPopUp}>Editar Lista De Banners</h2>
        <div className={styles.ListaDeBanners}>
          {Object.entries(formData.banners || {}).map(
            ([key, banner]) => (
              <div key={key} className={styles.ItemBanner}>
                <div className={styles.PreviewBanner}>
                  <img
                    className={styles.ImgBanner}
                    src={banner.src}
                    alt={banner.alt}
                  />
                </div>
                <div className={styles.InfoBanner}>
                  <p className={styles.InformacaoBanner}>
                    Texto Alternativo: {banner.alt}
                  </p>
                  <p className={styles.InformacaoBanner}>Link: {banner.link}</p>
                </div>
                <button className={styles.BotaoEditar}>Editar</button>
                <button className={styles.BotaoExcluir}>Excluir</button>
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

export default PopUpEditarListaDeBanners;
