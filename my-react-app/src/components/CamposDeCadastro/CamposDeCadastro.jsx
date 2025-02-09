import { useState } from "react";
import { registerUser } from "../../api"; 
import { Link, useNavigate } from "react-router-dom";
import styles from "./CamposDeCadastro.module.css";

function CamposDeCadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Para redirecionamento pós-cadastro

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError("As senhas não coincidem!");
            return;
        }

        if (password.length < 8) {
            setError("A senha deve ter pelo menos 8 caracteres.");
            return;
        }

        const result = await registerUser(nome, email, password);

        if (result.success) {
            navigate("/login"); // 🔴 Redireciona apenas se o cadastro for bem-sucedido
        } else {
            setError(result.message); // 🔴 Exibe a mensagem de erro no frontend
        }
    };

    return (
        <div className={styles.CamposDeCadastro}>
            <img src="/assets/Logos/LogoFGR.svg" className={styles.Logo} alt="Logo"/>

            <form className={styles.FormCadastro} onSubmit={handleSubmit}>
                <input
                    className={styles.CampoDeTexto}
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    className={styles.CampoDeTexto}
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className={styles.CampoDeTexto}
                    type="password"
                    name="senha"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className={styles.CampoDeTexto}
                    type="password"
                    name="confirmar_senha"
                    placeholder="Confirme sua senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button className={styles.BotaoVerdePadrao} type="submit">Registrar-se</button>
            </form>

            {error && <p className={styles.Erro}>{error}</p>} {/* 🔴 Exibe mensagem de erro */}

            <div className={styles.JaPossuiConta}>
                <p className={styles.TextoJaPossuiConta}>Já possui uma conta?</p>
                <Link to="/Login">
                    <button className={styles.BotaoLogin}>Faça Login</button>
                </Link>
            </div>
        </div>
    );
}

export default CamposDeCadastro;
