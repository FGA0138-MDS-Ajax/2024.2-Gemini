import styles from './Header.module.css';

function Header(){

    return(
        <header>
            <ul className={styles.ItensDoMenu}>
                <img src='src/assets/LogoFGR.png' className={styles.Logo}/>
                <div className={styles.ClicaveisDaHeader}>
                    <h1 className={styles.TitulosDoMenu}> PRODUTOS </h1>
                    <h1 className={styles.TitulosDoMenu}> QUEM SOMOS / APRESENTAÇÃO </h1>
                    <h1 className={styles.TitulosDoMenu}> PATROCINADORES </h1>
                    <ul className={styles.IconesDaHeader}>
                        <li>
                            <a><img src='src/assets/icones/ShoppingCart.svg' className={styles.Icones} /></a>
                        </li>
                        <li>
                            <a><img src='src/assets/icones/User.svg' className={styles.Icones}/></a>
                        </li>
                    </ul>
                </div>
            </ul>
        </header>
    );

}

export default Header