import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Carrossel.module.css';


function Carrossel({ LinksDasImagens }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % LinksDasImagens.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [LinksDasImagens]);

    return (
        <div className={styles.Carrossel}>
            <div className={styles.CarrosselContainer} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {LinksDasImagens.map((image, index) => (
                    <div className={styles.CarrosselItem} key={index}>
                        <a href={image.link || "#"} target="_blank" rel="noopener noreferrer">
                            <img src={image.src} alt={image.alt} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

Carrossel.propTypes = {
    LinksDasImagens: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
            link: PropTypes.string
        })
    ).isRequired
};
export default Carrossel;
