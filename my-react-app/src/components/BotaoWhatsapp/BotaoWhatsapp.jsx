import styles from './BotaoWhatsapp.module.css'

function BotaoWhatsapp() {

  return(

        <a className={styles.BotaoWhatsapp} href="https://api.whatsapp.com/send?phone=556190009318&fbclid=PAY2xjawGx0OxleHRuA2FlbQIxMAABppyoQ5wiaxiDnJqMPRw6NSWIucsog87ulFpofg6xPZoMtzSPrLsnxy-oNw_aem_iuJhfRBbrhfGfqdAqU1H3w">
            <img src='/assets/Logos/LogoWhatsapp.svg' alt="" className={styles.LogoWhatsapp} />
        </a>
    
  )
}

export default BotaoWhatsapp



