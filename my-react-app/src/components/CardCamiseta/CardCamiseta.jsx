import { Link } from "react-router-dom";
import styles from "./CardCamiseta.module.css";
import PropTypes from 'prop-types';

function CardCamiseta({ linkPaginaCamiseta, imgFrente, imgTras, nome, preco, prestacoes }) {
    return (
        <Link to={linkPaginaCamiseta} className={styles.CardLink}>
            <div className={styles.CardCamiseta}>
                {/* Imagem da frente */}
                <img
                    className={`${styles.ImgCamiseta} ${styles.Front}`}
                    src={imgFrente || "/assets/Camisetas/placeholder.png"} // 🔹 Evita erro se `imgFrente` for null
                    alt={nome || "Imagem da camiseta"}
                />
        
                {/* Imagem de trás */}
                <img
                    className={`${styles.ImgCamiseta} ${styles.Back}`}
                    src={imgTras || imgFrente || "/assets/Camisetas/placeholder.png"} // 🔹 Usa `imgFrente` caso `imgTras` seja null
                    alt={nome || "Imagem da camiseta"}
                />
                
                <div className={styles.InfoCard}>
                    <h3 className={styles.NomeCamiseta}>{nome}</h3>
                    <div className={styles.Valores}>
                        <h3 className={styles.PrecoCamiseta}>{preco || "Preço indisponível"}</h3>
                        <h5 className={styles.PrestacoesCamiseta}>{prestacoes || ""}</h5>
                    </div>
                </div>
            </div>
        </Link>
    );
}
CardCamiseta.propTypes = {
    linkPaginaCamiseta: PropTypes.string.isRequired,
    imgFrente: PropTypes.string,
    imgTras: PropTypes.string,
    nome: PropTypes.string,
    preco: PropTypes.string,
    prestacoes: PropTypes.string,
};

export default CardCamiseta;
