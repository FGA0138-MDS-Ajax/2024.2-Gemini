import { useState, useEffect } from "react";
import { loginUser } from "../../api"; 
import { Link, useNavigate } from "react-router-dom";
import styles from "./CamposDeLogin.module.css";

function CamposDeLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Para redirecionamento pós-login

    // 🔹 Se já estiver logado, redireciona para /home
    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (token) {
            navigate("/home");
        }
    }, [navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        const result = await loginUser(email, password);

        if (result.success) {
            navigate("/home"); // 🔴 Redireciona após login bem-sucedido
        } else {
            setError(result.message); // 🔴 Exibe erro se falhar
        }
    };

    return (
        <div className={styles.CamposDeLogin}>
            <img src="/assets/Logos/LogoFGR.svg" className={styles.Logo} alt="Logo"/>

            <form className={styles.FormLogin} onSubmit={handleSubmit}>
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
                <button className={styles.BotaoEntrar} type="submit">Entrar</button>
            </form>

            {error && <p className={styles.Erro}>{error}</p>} {/* 🔴 Exibe mensagem de erro */}

            <button className={styles.BotaoEsqueciSenha}>Esqueci a senha</button>

            <div className={styles.NaoTemConta}>
                <p className={styles.TextoNaoTemConta}>Não tem conta?</p>
                <Link to="/Cadastro">
                    <button className={styles.BotaoRegistrar}>Registrar</button>
                </Link>
            </div>
        </div>
    );
}

export default CamposDeLogin;