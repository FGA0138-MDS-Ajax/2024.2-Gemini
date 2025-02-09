import styles from './FooterDeVendas.module.css';

function FooterDeVendas(){

    return(
        <footer>
            <h5 className={styles.VoltarAoTopo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> <img src='assets/Icons/UpArrow.svg' alt="" />Voltar ao topo</h5>
            <div className={styles.ConteudoPrincipal}>
                <ul className={styles.RedesSociais}>
                    <li>Nos acompanhe nas redes sociais:</li>
                    <li>
                        <a href="mailto:fgaracing.eletric@gmail.com?subject=Olá&body=Esta%20é%20uma%20mensagem%20teste."><img src='/assets/Logos/LogoGmail.svg' className={styles.IconeRedeSocial}/></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/fgr.unb?igsh=NXoyd2YxY3IzOTIw"><img src='/assets/Logos/LogoInstagram.svg' className={styles.IconeRedeSocial}/></a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=5561990009318&fbclid=PAY2xjawGx0OxleHRuA2FlbQIxMAABppyoQ5wiaxiDnJqMPRw6NSWIucsog87ulFpofg6xPZoMtzSPrLsnxy-oNw_aem_iuJhfRBbrhfGfqdAqU1H3w"><img src='/assets/Logos/LogoWhatsapp.svg' className={styles.IconeRedeSocial}/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/fgr-unb/"><img src='/assets/Logos/LogoLinkedin.svg' className={styles.IconeRedeSocial}/></a>
                    </li>
                </ul>
                <img className={styles.LogoUnb} src='/assets/Logos/LogoUnB.svg'/>
                <div className={styles.LogosDePagamentos}>
                    <img className={styles.LogoDePagamento} src='/assets/Logos/LogoPix.svg' alt="" />
                    <img className={styles.LogoDePagamento} src='/assets/Logos/LogoBoleto.svg'/>
                </div>
            </div>
            <div className={styles.DesenvolvidoPor}>
                <p> © 2024 por FGR UNB</p>
                <p>Desenvolvido por Grupo Gemini - MDS 2024.2</p>
            </div>
        </footer>
    );

}

export default FooterDeVendas