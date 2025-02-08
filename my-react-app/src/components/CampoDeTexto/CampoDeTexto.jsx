import styles from './CampoDetexto.module.css';

function CampoDeTexto({label}){

    return(

            <input type="text" className={styles.CampoDeTexto} value={label}/>
    );

}

export default CampoDeTexto