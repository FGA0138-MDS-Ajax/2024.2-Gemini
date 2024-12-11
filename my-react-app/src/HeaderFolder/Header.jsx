import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Header(){

    return(
        <header>
            <ul className={styles.ItensDoMenu}>
                <img src='src/assets/logoFGR(naoEPNG).png' className={styles.Logo}></img>
                <div className={styles.ClicaveisDaHeader}>
                    <h1 className={styles.TitulosDoMenu}> PRODUTOS </h1>
                    <h1 className={styles.TitulosDoMenu}> QUEM SOMOS / APRESENTAÇÃO </h1>
                    <h1 className={styles.TitulosDoMenu}> PATROCINADORES </h1>
                    <ul className={styles.IconesDaHeader}>
                        <FontAwesomeIcon icon={faCartShopping} className={styles.Icones}/>
                        <FontAwesomeIcon icon={faCircleUser} className={styles.Icones} />
                    </ul>
                </div>
            </ul>
        </header>
    );

}

export default Header