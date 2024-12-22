import styles from './CampoEditavel.module.css';

function CampoEditavel({label, info}){

    return(

        <div className={styles.CampoEditavel}>

            <h3 className={styles.Label}>{label}</h3>
            <input type="text" className={styles.CampoDeTexto} value={info}/>

        </div>

    );

}

export default CampoEditavel