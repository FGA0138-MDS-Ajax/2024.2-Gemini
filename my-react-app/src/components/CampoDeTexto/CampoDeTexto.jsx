import PropTypes from 'prop-types';
import styles from "./CampoDeTexto.module.css";

const CampoDeTexto = ({ label }) => {
  return (
    <div className={styles.CampoDeTexto}>
      <label>{label}</label>
      <input type="text" />
    </div>
  );
};

CampoDeTexto.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CampoDeTexto;