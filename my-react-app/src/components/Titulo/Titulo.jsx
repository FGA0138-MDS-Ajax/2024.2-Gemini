import styles from './Titulo.module.css';

function Titulo({texto, tamanho, gradiente}){
    const tituloClass = gradiente ? styles.TituloComGradiente : styles.Titulo;

    return(
        <h1 className={tituloClass} style={{'--titulo-tamanho': tamanho}}>{texto}</h1>
    )
}

export default Titulo