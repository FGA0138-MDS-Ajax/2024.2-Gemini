import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { isAuthenticated, logoutUser } from "../../utils/auth";

function Header() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

    // 🔹 Atualiza automaticamente o estado quando o usuário loga/desloga
    useEffect(() => {
        const updateAuth = () => setIsLoggedIn(isAuthenticated());
        
        window.addEventListener("storage", updateAuth);
        return () => window.removeEventListener("storage", updateAuth);
    }, []);

    const handleLogout = async () => {
        await logoutUser(); // 🔹 Faz o logout e remove os tokens
        setIsLoggedIn(false); // 🔹 Atualiza imediatamente a interface
        navigate("/home", { replace: true }); // 🔹 Redireciona para a home
    };

    return (
        <header>
            <nav className={styles.ItensDoMenu}>
                <Link to="/home">
                    <img src="/assets/Logos/LogoFGR.svg" className={styles.Logo} alt="Logo" />
                </Link>
                <div className={styles.ClicaveisDaHeader}>
                    <Link to="/historia">
                        <h1 className={styles.TitulosDoMenu}> QUEM SOMOS / APRESENTAÇÃO </h1>
                    </Link>
                    <Link to="/patrocinadores">
                        <h1 className={styles.TitulosDoMenu}> PATROCINADORES </h1>
                    </Link>
                    <Link to="/produtos">
                        <h1 className={styles.TitulosDoMenu}> PRODUTOS </h1>
                    </Link>
                    <ul className={styles.IconesDaHeader}>
                        <li>
                            <Link to="/carrinho">
                                <img src="/assets/Icons/ShoppingCart.svg" className={styles.Icones} alt="Carrinho" />
                            </Link>
                        </li>
                        <li>
                            {/* 🔹 Agora redireciona corretamente dependendo do estado de login */}
                            <Link to={isLoggedIn ? "/usuario" : "/login"}>
                                <img src="/assets/Icons/User.svg" className={styles.Icones} alt="Usuário" />
                            </Link>
                        </li>
                        {isLoggedIn && (
                            <li>
                                <button onClick={handleLogout} className={styles.BotaoLogout}>
                                    <img src="/assets/Icons/Logout.svg" className={styles.Icones} alt="Sair" />
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
