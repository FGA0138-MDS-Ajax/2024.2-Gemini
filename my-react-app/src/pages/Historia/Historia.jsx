import { Header, Footer } from '../../components/index.js';
import styles from './Historia.module.css'

function Historia() {

  return(

    <div className={styles.PaginaHistoria}>
        <Header/>

        <div className={styles.SecaoNossaHistoria}>

            <h1 className={styles.TituloNossaHistoria}>Nossa Historia</h1>

            <p className={styles.ParagrafoNossaHistoria}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus consectetur felis. Integer ut ex posuere, laoreet massa et, pretium quam. Morbi dolor nunc, convallis non rutrum vel, ornare lobortis erat. Ut tristique fringilla lectus. Donec sed aliquet lorem. Duis in sollicitudin purus, vulputate fringilla tellus. Ut in tristique risus, non luctus risus. Donec lorem erat, egestas in mattis at, posuere venenatis felis. Fusce bibendum finibus gravida. Ut finibus mauris eget facilisis elementum.</p>
            <p className={styles.ParagrafoNossaHistoria}>Morbi urna sem, pretium non dolor sit amet, tincidunt ullamcorper dui. Aenean id sem nec augue aliquet mattis sed sed nisl. Donec dapibus ex orci, eu fringilla orci fermentum eget. Nunc sed libero lorem. Ut et turpis arcu. Nulla facilisi. Proin a diam sodales massa sollicitudin faucibus. Nunc euismod mollis auctor. Praesent congue sagittis neque sit amet dapibus.</p>
            <p className={styles.ParagrafoNossaHistoria}>Morbi urna sem, pretium non dolor sit amet, tincidunt ullamcorper dui. Aenean id sem nec augue aliquet mattis sed sed nisl. Donec dapibus ex orci, eu fringilla orci fermentum eget. Nunc sed libero lorem. Ut et turpis arcu. Nulla facilisi. Proin a diam sodales massa sollicitudin faucibus. Nunc euismod mollis auctor. Praesent congue sagittis neque sit amet dapibus.</p>

        </div>
  
        <Footer/>

    </div>
  )
}

export default Historia