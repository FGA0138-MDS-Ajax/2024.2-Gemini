import React, {useState, useEffect} from 'react';
import styles from './Carrossel.module.css';

function Carrossel({LinksDasImagens}){

     const [currentIndex, setCurrentIndex] = useState(0);

     function nextImage(){
        setCurrentIndex((prevIndex) => (prevIndex + 1) % LinksDasImagens.length);            
     };

     useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 6000);
        return () => clearInterval(interval);
    }, [currentIndex]);

     return (
        <div className={styles.Carrossel}>
            {LinksDasImagens.map((image, index) => (
                <div className={styles.CarrosselItem} key={index} style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                    <a href={image.link} target="_blank" rel="noopener noreferrer">
                        <img src={image.src} alt={image.alt} />
                    </a>
                </div>
            ))}

            <button onClick={nextImage}>Próxima</button>

        </div>

     );

};

export default Carrossel