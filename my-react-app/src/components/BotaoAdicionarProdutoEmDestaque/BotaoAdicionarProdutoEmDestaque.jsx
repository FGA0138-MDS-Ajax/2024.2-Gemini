import styles from './BotaoAdicionarProdutoEmDestaque.module.css'

function BotaoAdicionarProdutoEmDestaque({ onClick }) {

  return(

    <button className={styles.BotaoAdicionarProdutoEmDestaque} onClick={onClick}>
      <img src='assets/Icons/Sum.svg' className={styles.IconeEditar}/> 
        Adicionar Produto Em Destaque
      </button>
    
  )
}

export default BotaoAdicionarProdutoEmDestaque