import styles from './BotaoVerdePadrao.module.css'

function BotaoVerdePadrao({label}) {

  return(

    <button className={styles.BotaoVerdePadrao}>{label}</button>
    
  )
}

export default BotaoVerdePadrao