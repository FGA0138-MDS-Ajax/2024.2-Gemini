import PropTypes from 'prop-types';

const BotaoVerdePadrao = ({ label }) => {
  return (
    <button className="botao-verde-padrao">
      {label}
    </button>
  );
};

BotaoVerdePadrao.propTypes = {
  label: PropTypes.string.isRequired,
};

export default BotaoVerdePadrao;