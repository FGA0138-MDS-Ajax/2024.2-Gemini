import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Importe useNavigate
import styles from './CamposDeRecuperacao.module.css';

function CamposDeRecuperacao() {
    const [step, setStep] = useState(1); // 1 - Solicitar e-mail, 2 - Redefinir senha
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();  // Hook para navegação programática

    // Função para enviar o e-mail
    const handleRequestToken = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/enviar-token', { // Seu endpoint para enviar o token
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            if (response.ok) {
                setStep(2); // Passa para a etapa de redefinir senha
            } else {
                const error = await response.json();
                setErrorMessage(error.message);
            }
        } catch (err) {
            setErrorMessage('Erro ao enviar o token. Tente novamente.');
        }
    };

    // Função para redefinir a senha
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (novaSenha !== confirmarSenha) {
            setErrorMessage('As senhas não coincidem.');
            return;
        }
        try {
            const response = await fetch('/api/redefinir-senha', { // Seu endpoint para redefinir a senha
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, token, novaSenha })
            });
            if (response.ok) {
                alert('Senha alterada com sucesso!');
                navigate('/login');  // Redireciona para a página de login após redefinir a senha
            } else {
                const error = await response.json();
                setErrorMessage(error.message);
            }
        } catch (err) {
            setErrorMessage('Erro ao redefinir a senha. Tente novamente.');
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
