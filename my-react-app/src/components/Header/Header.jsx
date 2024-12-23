import {Link} from 'react-router-dom';
import styles from './Header.module.css';

function Header(){

    return(
        <header>
            <ul className={styles.ItensDoMenu}>
                <Link to='/Home'>
                    <img src='/assets/Logos/LogoFGR.svg' className={styles.Logo}/>
                </Link>
                <div className={styles.ClicaveisDaHeader}>
                    <Link to='/Produtos'>
                        <h1 className={styles.TitulosDoMenu}> PRODUTOS </h1>
                    </Link>
                    <Link to='/Historia'>
                        <h1 className={styles.TitulosDoMenu}> QUEM SOMOS / APRESENTAÇÃO </h1>
                    </Link>
                    <Link to='/Patrocinadores'>
                        <h1 className={styles.TitulosDoMenu}> PATROCINADORES </h1>
                    </Link>
                    <ul className={styles.IconesDaHeader}>
                        <li>
                            <Link to='/Carrinho'>
                                <a><img src='assets/Icons/ShoppingCart.svg' className={styles.Icones} /></a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/Usuario'>
                                <a><img src='/assets/Icons/User.svg' className={styles.Icones}/></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </ul>
        </header>
    );

}

export default Header



