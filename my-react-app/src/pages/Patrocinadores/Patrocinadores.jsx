import { Header, Footer, Titulo } from '../../components/index.js';
import styles from './Patrocinadores.module.css'

function Patrocinadores() {

  return(

    <section className={styles.Patrocinadores}>
        <Header/>

        <div className={styles.SecaoPatrocinadores}>

            <Titulo texto="Nossos Patrocinadores" tamanho="86px" gradiente={false}/>

            <div className={styles.Divisoria}/>

            <div className={styles.GaleriaPatrocinadores}>

                <img src='assets/Patrocinadores/Dassault_Systemes-Logo.svg' alt="" />

            </div>

        </div>
  
        <Footer/>

    </section>
  )
}

export default Patrocinadores
