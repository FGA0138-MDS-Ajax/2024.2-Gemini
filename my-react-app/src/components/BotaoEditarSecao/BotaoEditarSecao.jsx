import styles from './BotaoEditarSecao.module.css'

function BotaoEditarSecao({ onClick, nome }) {

  return(

    <button className={styles.BotaoEditarSecao} onClick={onClick}>
      <img src='assets/Icons/Edit.svg' className={styles.IconeEditar}/> 
        Editar {nome}
      </button>
    
  )
}

export default BotaoEditarSecao