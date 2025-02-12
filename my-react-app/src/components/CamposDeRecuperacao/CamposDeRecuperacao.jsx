import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import styles from './CamposDeRecuperacao.module.css';
import { requestPasswordReset, resetPassword } from '../../api'; // 🔹 Importa as funções da API

function CamposDeRecuperacao() {
    const [step, setStep] = useState(1); // 1 - Solicitar e-mail, 2 - Redefinir senha
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // 🔹 Função para validar se o token tem um formato válido de UUID
    const isValidUUID = (token) => {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(token);
    };

    // 🔹 Enviar e-mail para recuperar senha
    const handleRequestToken = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        const result = await requestPasswordReset(email);

        if (result.success) {
            setStep(2); // Avança para a tela de redefinição de senha
        } else {
            setErrorMessage(result.message);
        }
    };

    // 🔹 Redefinir senha
    const handleResetPassword = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!isValidUUID(token)) {
            setErrorMessage('Código inválido. Verifique e tente novamente.');
            return;
        }

        if (novaSenha !== confirmarSenha) {
            setErrorMessage('As senhas não coincidem.');
            return;
        }

        const result = await resetPassword(email, token, novaSenha);

        if (result.success) {
            alert('Senha alterada com sucesso!');
            navigate('/login'); // Redireciona para login após redefinir senha
        } else {
            setErrorMessage(result.message || 'Erro desconhecido ao redefinir senha.');
        }
    };

    return (
        <div className={styles.CamposDeRecuperacao}>
            <img src='/assets/Logos/LogoFGR.svg' className={styles.Logo} />

            {step === 1 ? (
                <div>
                    <h2>Vamos recuperar sua senha</h2>
                    <p>Informe o email que você usa para entrar na sua conta.</p>
                    <form className={styles.FormRecuperacao} onSubmit={handleRequestToken}>
                        <input
                            className={styles.CampoDeTexto}
                            type="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className={styles.BotaoVerdePadrao} type="submit">Enviar código</button>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    </form>
                </div>
            ) : (
                <div>
                    <h2>Redefinir sua senha</h2>
                    <p>Insira o código recebido e a nova senha.</p>
                    <form className={styles.FormRecuperacao} onSubmit={handleResetPassword}>
                        <input
                            className={styles.CampoDeTexto}
                            type="text"
                            name="token"
                            placeholder="Digite o código recebido"
                            required
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                        />
                        <input
                            className={styles.CampoDeTexto}
                            type="password"
                            name="novaSenha"
                            placeholder="Digite sua nova senha"
                            required
                            value={novaSenha}
                            onChange={(e) => setNovaSenha(e.target.value)}
                        />
                        <input
                            className={styles.CampoDeTexto}
                            type="password"
                            name="confirmarSenha"
                            placeholder="Confirme sua nova senha"
                            required
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                        />
                        <button className={styles.BotaoVerdePadrao} type="submit">Redefinir Senha</button>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    </form>
                </div>
            )}

            <div className={styles.LembreteLogin}>
                <p className={styles.TextoLembrete}>Lembrou sua senha?</p>
                <Link to="/Login">
                    <button className={styles.BotaoLogin}>Faça Login</button>
                </Link>
            </div>
        </div>
    );
}

export default CamposDeRecuperacao;
