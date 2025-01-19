import { useState } from 'react';
import { login, registerUser } from '../../services/authService'; // Importa o serviço de criação de usuários
import styles from './CamposDeLogin.module.css';

function CamposDeLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // Para mensagens de sucesso

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      alert('Login bem-sucedido!');
      console.log(response);
    } catch (err) {
      setError('Falha no login. Verifique suas credenciais.');
      console.error(err.message);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await registerUser(email, password);
      setSuccess('Usuário criado com sucesso! Faça login.');
      setError(''); // Limpa erros anteriores
      console.log(response);
    } catch (err) {
      setError('Erro ao criar usuário: ' + err.message);
      setSuccess(''); // Limpa mensagens de sucesso
    }
  };

  return (
    <div className={styles.CamposDeLogin}>
      <img src="src/assets/LogoFGR.png" className={styles.Logo} alt="Logo" />

      <input
        type="text"
        className={styles.CampoDeTexto}
        placeholder="Usuário ou e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        className={styles.CampoDeTexto}
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className={styles.BotaoEntrar} onClick={handleLogin}>
        Entrar
      </button>

      <button className={styles.BotaoRegistrar} onClick={handleRegister}>
        Criar Conta
      </button>

      {error && <p className={styles.Error}>{error}</p>}
      {success && <p className={styles.Success}>{success}</p>}
    </div>
  );
}

export default CamposDeLogin;
