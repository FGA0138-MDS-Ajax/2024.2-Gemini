import styles from './BotaoDeTamanho.module.css'

function BotaoDeTamanho({label}) {

  return(

    <button className={styles.BotaoDeTamanho}>{label}</button>
    
  )
}

export default BotaoDeTamanho