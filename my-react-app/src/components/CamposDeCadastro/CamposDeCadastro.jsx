import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Adicione useNavigate
import { registerUser } from '../../services/authService';
import styles from './CamposDeCadastro.module.css';

function CamposDeCadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      setError('As senhas não conferem.');
      return;
    }
    try {
      await registerUser(formData.email, formData.nome, formData.senha);
      alert('Usuário registrado com sucesso!');
      setError('');
      navigate('/home'); // Redireciona para a página inicial
    } catch (error) {
      setError('Erro ao registrar usuário.');
      console.error(error.message);
    }
  };

  return (
    <div className={styles.CamposDeCadastro}>
      <img src="src/assets/LogoFGR.png" className={styles.Logo} alt="Logo" />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.CampoDeTexto}
          name="nome"
          placeholder="Nome Completo"
          value={formData.nome}
          onChange={handleChange}
        />
        <input
          type="email"
          className={styles.CampoDeTexto}
          name="email"
          placeholder="E-mail ou usuário"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          className={styles.CampoDeTexto}
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
        />
        <input
          type="password"
          className={styles.CampoDeTexto}
          name="confirmarSenha"
          placeholder="Confirmar Senha"
          value={formData.confirmarSenha}
          onChange={handleChange}
        />

        <button type="submit" className={styles.BotaoRegistrase}>
          Registrar-se
        </button>
      </form>

      <div className={styles.JaPossuiConta}>
        <p className={styles.TextoJaPossuiConta}>Já possui uma conta?</p>
        <Link to="/login">
          <button className={styles.BotaoLogin}>Faça Login</button>
        </Link>
      </div>

      {error && <p className={styles.Error}>{error}</p>}
    </div>
  );
}

export default CamposDeCadastro;
