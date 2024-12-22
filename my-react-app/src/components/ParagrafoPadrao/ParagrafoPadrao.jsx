import styles from './ParagrafoPadrao.module.css'

function ParagrafoPadrao({texto}) {

  return(

    <p className={styles.ParagrafoPadrao}>{texto}</p>
    
  )
}

export default ParagrafoPadrao