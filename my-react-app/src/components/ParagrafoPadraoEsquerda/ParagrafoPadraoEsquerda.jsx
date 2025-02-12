import styles from './ParagrafoPadraoEsquerda.module.css'

function ParagrafoPadraoEsquerda({texto}) {

  return(

    <p className={styles.ParagrafoPadrao}>{texto}</p>
    
  )
}

export default ParagrafoPadraoEsquerda