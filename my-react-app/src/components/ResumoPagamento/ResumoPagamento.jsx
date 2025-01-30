import styles from './ResumoPagamento.module.css';
import { Titulo } from '../../components';

function ResumoPagamento({local, total}){

    return(

        <div className={styles.ResumoPagamento}>
            
            <Titulo texto="Resumo" tamanho="24px"/>

            <h3 className={styles.TituloPagamento}>Local</h3>
            <h3 className={styles.InfoPagamento}>{local}</h3>

            <h3 className={styles.TituloPagamento}>Total da Compra</h3>
            <h3 className={styles.InfoPagamento}>{total}</h3>

        </div>

    );

}

export default ResumoPagamento