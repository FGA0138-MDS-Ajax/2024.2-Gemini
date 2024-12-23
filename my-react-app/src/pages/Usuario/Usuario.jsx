import { Header, Footer, MenuUsuario } from "../../components/index.js";
import styles from "./Usuario.module.css";

function PaginaUsuario() {
  return (
    <div className={styles.PaginaUsuario}>
      <Header />

      <MenuUsuario />

      <Footer />
    </div>
  );
}

export default PaginaUsuario;
