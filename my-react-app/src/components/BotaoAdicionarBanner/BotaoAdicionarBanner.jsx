import styles from './BotaoAdicionarBanner.module.css'

function BotaoAdicionarBanner({ onClick }) {

  return(

    <button className={styles.BotaoAdicionarBanner} onClick={onClick}>
      <img src='assets/Icons/Sum.svg' className={styles.IconeEditar}/> 
        Adicionar Banner
      </button>
    
  )
}

export default BotaoAdicionarBanner