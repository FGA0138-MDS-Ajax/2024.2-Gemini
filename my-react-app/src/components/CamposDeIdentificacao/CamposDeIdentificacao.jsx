import styles from './CamposDeIdentificacao.module.css';

function CamposDeIndetificacao(){

    return(

        <div className={styles.CamposDeIdentificacao}>

            <h1>Dados</h1>

            <h3 className={styles.Label}>Nome</h3>
            <input type="text" className={styles.CampoDeTexto} value="Este e um texto que pode ser editado."/>

            <h3 className={styles.Label}>CPF</h3>
            <input type="text" className={styles.CampoDeTexto} value="Este e um texto que pode ser editado."/>

            <h3 className={styles.Label}>Email</h3>
            <input type="text" className={styles.CampoDeTexto} value="Este e um texto que pode ser editado."/>

        </div>

    );

}

export default CamposDeIndetificacao