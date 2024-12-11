import styles from './Footer.module.css';

function Footer(){

    return(
        <footer>
            <h5 className={styles.VoltarAoTopo}> <img src='src/assets/ArrowUpCircle.png' alt="" />Voltar ao topo</h5>
            <ul className={styles.RedesSociais}>
                <li>Nos acompanhe nas redes sociais:</li>
                <li>
                    <a><img src='src/assets/gmailPng.png'></img></a>
                </li>
                <li>
                    <a><img src='src/assets/InstagramLogo.png'></img></a>
                </li>
                <li>
                    <a><img src='src/assets/WhatsappLogo.png'></img></a>
                </li>
                <li>
                    <a><img src='src/assets/LinkedinLogo.png'></img></a>
                </li>
            </ul>
            <img className={styles.LogoUnb} src='src/assets/LogoUnb.png'></img>
            <h4> 2024 por FGR UNB</h4>
            <p>Desenvolvido por Grupo Gemini - MDS 2024.2</p>
        </footer>
    );

}

export default Footer