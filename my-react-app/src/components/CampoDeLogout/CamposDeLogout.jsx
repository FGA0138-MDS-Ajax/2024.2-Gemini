import { useNavigate } from 'react-router-dom';
import styles from './CampoDeLogout.module.css';

function CampoDeLogout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        
        console.log("Usuário deslogado");
        navigate('/login'); 
    };

    return (
        <div className={styles.CampoDeLogout}>
            <img src='/assets/Logos/LogoFGR.svg' className={styles.Logo} alt="Logo" />
            <button className={styles.BotaoLogout} onClick={handleLogout}>Sair</button>
        </div>
    );
}

export default CampoDeLogout;
