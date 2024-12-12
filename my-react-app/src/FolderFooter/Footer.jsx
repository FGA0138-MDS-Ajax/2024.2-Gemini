import styles from './Footer.module.css';

function Footer(){

    return(
        <footer>
            <h5 className={styles.VoltarAoTopo}> <img src='src/assets/icones/ArrowUpCircle.png' alt="" />Voltar ao topo</h5>
            <ul className={styles.RedesSociais}>
                <li>Nos acompanhe nas redes sociais:</li>
                <li>
                    <a href="mailto:fgaracing.eletric@gmail.com?subject=Olá&body=Esta%20é%20uma%20mensagem%20teste."><img src='src/assets/icones/gmailPng.png' className={styles.IconeRedeSocial}/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/fgr.unb?igsh=NXoyd2YxY3IzOTIw"><img src='src/assets/icones/InstagramLogo.png' className={styles.IconeRedeSocial}/></a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=556190009318&fbclid=PAY2xjawGx0OxleHRuA2FlbQIxMAABppyoQ5wiaxiDnJqMPRw6NSWIucsog87ulFpofg6xPZoMtzSPrLsnxy-oNw_aem_iuJhfRBbrhfGfqdAqU1H3w"><img src='src/assets/icones/WhatsappLogo.png' className={styles.IconeRedeSocial}/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/fgracing/"><img src='src/assets/icones/LinkedinLogo.png' className={styles.IconeRedeSocial}/></a>
                </li>
            </ul>
            <img className={styles.LogoUnb} src='src/assets/LogoUnb.png'/>
            <h4>2024 por FGR UNB</h4>
            <p>Desenvolvido por Grupo Gemini - MDS 2024.2</p>
        </footer>
    );

}

export default Footer