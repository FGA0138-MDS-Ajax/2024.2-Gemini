import {Link} from 'react-router-dom';
import {useState} from 'react';
import styles from './Header.module.css';

function Header({isEditMode, toggleEditMode}){
    console.log('isEditMode:', isEditMode);

    return(
        <header>
            <ul className={styles.ItensDoMenu}>
                <Link to='/Home'>
                    <img src='/assets/Logos/LogoFGR.svg' className={styles.Logo}/>
                </Link>
                <div className={styles.ClicaveisDaHeader}>
                    <Link to='/Historia'>
                        <h1 className={styles.TitulosDoMenu}> QUEM SOMOS </h1>
                    </Link>
                    <Link to='/Patrocinadores'>
                        <h1 className={styles.TitulosDoMenu}> PATROCINADORES </h1>
                    </Link>
                    <Link to='/Produtos'>
                        <h1 className={styles.TitulosDoMenu}> PRODUTOS </h1>
                    </Link>
                    <ul className={styles.IconesDaHeader}>
                        <li>
                            <Link to='/Carrinho'>
                                <img src='assets/Icons/ShoppingCart.svg' className={styles.Icones} />
                            </Link>
                        </li>
                        <li>
                            <Link to='/Usuario'>
                                <img src='/assets/Icons/User.svg' className={styles.Icones}/>
                            </Link>
                        </li>
                        <li>
                            <button onClick={toggleEditMode} className={styles.EditarPagina}>
                                <img src='assets/Icons/Edit.svg' className={styles.Icones}/>
                            </button>
                        </li>
                    </ul>
                </div>
            </ul>
        </header>
    );

}

export default Header



