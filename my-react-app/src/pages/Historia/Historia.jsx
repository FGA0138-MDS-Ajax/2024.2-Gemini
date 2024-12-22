import { Header, Footer, Titulo, ParagrafoPadrao } from '../../components/index.js';
import styles from './Historia.module.css'

function Historia() {

  return(

    <div className={styles.PaginaHistoria}>
        <Header/>

        <div className={styles.SecaoNossaHistoria}>

            <Titulo texto="Nossa História" tamanho="86px" gradiente={false}/>

            <ParagrafoPadrao texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus consectetur felis. Integer ut ex posuere, laoreet massa et, pretium quam. Morbi dolor nunc, convallis non rutrum vel, ornare lobortis erat. Ut tristique fringilla lectus. Donec sed aliquet lorem. Duis in sollicitudin purus, vulputate fringilla tellus. Ut in tristique risus, non luctus risus. Donec lorem erat, egestas in mattis at, posuere venenatis felis. Fusce bibendum finibus gravida. Ut finibus mauris eget facilisis elementum."/>
            <ParagrafoPadrao texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus consectetur felis. Integer ut ex posuere, laoreet massa et, pretium quam. Morbi dolor nunc, convallis non rutrum vel, ornare lobortis erat. Ut tristique fringilla lectus. Donec sed aliquet lorem. Duis in sollicitudin purus, vulputate fringilla tellus. Ut in tristique risus, non luctus risus. Donec lorem erat, egestas in mattis at, posuere venenatis felis. Fusce bibendum finibus gravida. Ut finibus mauris eget facilisis elementum."/>
            <ParagrafoPadrao texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus consectetur felis. Integer ut ex posuere, laoreet massa et, pretium quam. Morbi dolor nunc, convallis non rutrum vel, ornare lobortis erat. Ut tristique fringilla lectus. Donec sed aliquet lorem. Duis in sollicitudin purus, vulputate fringilla tellus. Ut in tristique risus, non luctus risus. Donec lorem erat, egestas in mattis at, posuere venenatis felis. Fusce bibendum finibus gravida. Ut finibus mauris eget facilisis elementum."/>

        </div>
  
        <Footer/>

    </div>
  )
}

export default Historia