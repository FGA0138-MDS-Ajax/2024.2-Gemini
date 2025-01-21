import styles from './BotaoEditarSecao.module.css'

function BotaoEditarSecao({ onClick }) {

  return(

    <button className={styles.BotaoEditarSecao} onClick={onClick}>
      <img src='assets/Icons/Edit.svg' className={styles.IconeEditar}/> 
        Editar seção
      </button>
    
  )
}

export default BotaoEditarSecao