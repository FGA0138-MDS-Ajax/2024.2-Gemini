import {useState} from 'react';
import { Header, Footer, Titulo,BotaoEditarSecao } from '../../components/index.js';
import styles from './Patrocinadores.module.css'

function Patrocinadores() {

  const [isEditMode, setIsEditMode] = useState(false)

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  return(

    <section className={styles.Patrocinadores}>
        <Header isEditMode={isEditMode} toggleEditMode={toggleEditMode}/>

        <div className={styles.SecaoPatrocinadores}>

            <Titulo texto="Nossos Patrocinadores" tamanho="86px" gradiente={false}/>

            <div className={styles.Divisoria}/>

            <div className={styles.GaleriaPatrocinadores}>

                <img src='assets/Patrocinadores/Dassault_Systemes-Logo.svg' alt="" />

            </div>

            {isEditMode && <BotaoEditarSecao className={styles.BotaoEditar}/>}

        </div>
  
        <Footer/>

    </section>
  )
}

export default Patrocinadores
