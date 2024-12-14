import {Link} from 'react-router-dom';
import styles from './PaginaUsuario.module.css';

import Header from '../HeaderFolder/Header.jsx';
import Footer from '../FolderFooter/Footer.jsx';
import ComponenteUsuario from '../FolderUsuario/ComponenteUsuario.jsx';

function PaginaUsuario(){

    return(

        <div className={styles.PaginaUsuario}>

            <Header/>

            <ComponenteUsuario/>

            <Footer/>

        </div>

    );

}

export default PaginaUsuario