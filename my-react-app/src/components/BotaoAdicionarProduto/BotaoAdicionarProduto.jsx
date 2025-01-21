import styles from './BotaoAdicionarProduto.module.css'

function BotaoAdicionarProduto({ onClick }) {

  return(

    <button className={styles.BotaoAdicionarProduto} onClick={onClick}>
      <img src='assets/Icons/Sum.svg' className={styles.IconeEditar}/> 
        Adicionar Produto
      </button>
    
  )
}

export default BotaoAdicionarProduto