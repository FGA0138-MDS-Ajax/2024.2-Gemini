import styles from './BotaoEditarFoto.module.css'

function BotaoEditarFoto({ onClick }) {

  return(

    <button className={styles.BotaoEditarFoto} onClick={onClick}><img src='assets/Icons/ImageAdd.svg' className={styles.IconeEditar}/></button>
    
  )
}

export default BotaoEditarFoto