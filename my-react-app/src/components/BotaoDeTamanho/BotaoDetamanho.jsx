import PropTypes from 'prop-types';

const BotaoDetamanho = ({ label }) => {
  return (
    <button className="botao-de-tamanho">
      {label}
    </button>
  );
};

BotaoDetamanho.propTypes = {
  label: PropTypes.string.isRequired,
};

export default BotaoDetamanho;