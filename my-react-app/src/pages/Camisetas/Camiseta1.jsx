import { Header, FooterDeVendas, MenuCamiseta, BotaoWhatsapp } from '../../components/index.js';
import styles from './Camiseta.module.css'

function PaginaCamiseta1() {

  return(

    <div className={styles.PaginaCamiseta}>
      <Header/>

      <MenuCamiseta
        imgSrc='/assets/Camisetas/CamisetaMCLaren.png'
        nome = "RIVALS COLLECTIONS 2024 | MCLAREN"
        preco= "R$ 59,99"/>

      <BotaoWhatsapp/>
  
      <FooterDeVendas/>

    </div>
  )
}

export default PaginaCamiseta1