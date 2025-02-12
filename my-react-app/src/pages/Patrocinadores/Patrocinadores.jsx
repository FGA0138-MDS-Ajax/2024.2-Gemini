import { Header, Footer, Titulo } from '../../components/index.js';
import styles from './Patrocinadores.module.css';

// Importando as imagens manualmente
import ansys from '../../assets/icones/patrocinadores/Ansys.jpg';
import circuibras from '../../assets/icones/patrocinadores/Circuibras.jpg';
import dassault from '../../assets/icones/patrocinadores/dassautsistems.jpg';
import finatec from '../../assets/icones/patrocinadores/finatec.jpg';
import ieee from '../../assets/icones/patrocinadores/IEEEpatrocinadores.jpg';
import mathworks from '../../assets/icones/patrocinadores/mathworks.jpg';
import redelease from '../../assets/icones/patrocinadores/redelease.jpg';
import tesla from '../../assets/icones/patrocinadores/tesla.jpg';
import texas from '../../assets/icones/patrocinadores/texasinstruments.jpg';
import weg from '../../assets/icones/patrocinadores/weg.jpg';

const patrocinadores = [
  { src: ansys, alt: "Ansys" },
  { src: circuibras, alt: "Circuibras" },
  { src: dassault, alt: "Dassault Systèmes" },
  { src: finatec, alt: "Finatec" },
  { src: ieee, alt: "IEEE" },
  { src: mathworks, alt: "MathWorks" },
  { src: redelease, alt: "Redelease" },
  { src: tesla, alt: "Tesla" },
  { src: texas, alt: "Texas Instruments" },
  { src: weg, alt: "WEG" }
];

function Patrocinadores() {
  return (
    <section className={styles.Patrocinadores}>
      <Header />

      <div className={styles.SecaoPatrocinadores}>
        <Titulo texto="Nossos Patrocinadores" tamanho="86px" gradiente={false} />

        <div className={styles.Divisoria} />

        <div className={styles.GaleriaPatrocinadores}>
          {patrocinadores.map((patrocinador, index) => (
            <img 
              key={index} 
              src={patrocinador.src} 
              alt={patrocinador.alt} 
              className={styles.ImagemPatrocinador}
            />
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Patrocinadores;