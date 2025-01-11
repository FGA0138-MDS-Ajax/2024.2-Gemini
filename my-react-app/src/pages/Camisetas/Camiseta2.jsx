import { Header, Footer, MenuCamiseta } from '../../components/index.js';
import styles from './Camiseta.module.css'

function PaginaCamiseta2() {

  return(

    <div className={styles.PaginaCamiseta}>
      <Header/>

      <MenuCamiseta
        imgSrc='/assets/camisetas/CamisetaRedbull.png'
        nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
        preco= "R$ 59,99"/>
  
      <Footer/>

    </div>
  )
}

export default PaginaCamiseta2