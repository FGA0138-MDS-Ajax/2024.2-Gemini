import React, {useState, useEffect} from 'react';
import styles from './CarrosselBanners.module.css';

function CarrosselBanners({conteudoBanners}){

     const [currentIndex, setCurrentIndex] = useState(0);

    const bannersArray = Object.values(conteudoBanners);

    function nextImage(){
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannersArray.lenght);
    }

     useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 6000);
        return () => clearInterval(interval);
    }, [currentIndex]);

     return (
        <div className={styles.Carrossel}>
            <div className={styles.CarrosselWrapper} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {bannersArray.map((banner, index) => (
                <div className={styles.CarrosselItem} key={index}>
                    <a href={banner.link} target="_blank" rel="noopener noreferrer">
                        <img src={banner.src} alt={banner.alt} />
                    </a>
                </div>
            ))}
            </div>

            <button onClick={nextImage}>Próxima</button>

        </div>

     );

};

export default CarrosselBanners