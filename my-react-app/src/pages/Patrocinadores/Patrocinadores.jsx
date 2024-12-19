import { Header, Footer } from '../../components/index.js';
import styles from './Patrocinadores.module.css'

function Patrocinadores() {

  return(

    <div className={styles.PaginaPatrocinadores}>
        <Header/>

        <div className={styles.SecaoPatrocinadores}>

            <h1 className={styles.TituloPatrocinadores}>Nossos Patrocinadores</h1>

            <div className={styles.Divisoria}/>

            <div className={styles.GaleriaPatrocinadores}>

                <img src='assets/Patrocinadores/Patrocinador1.png' alt="" />

            </div>

        </div>
  
        <Footer/>

    </div>
  )
}

export default Patrocinadores