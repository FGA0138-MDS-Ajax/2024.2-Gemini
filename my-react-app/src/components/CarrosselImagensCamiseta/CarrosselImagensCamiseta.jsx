import styles from "./CarrosselImagensCamiseta.module.css";
import React, { useState, useEffect } from "react";

function CarrosselImagensCamiseta({ conteudoImagens }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagensArray = conteudoImagens || [];

  function ImagemAnterior() {
    setCurrentIndex((prevIndex) => {
        const prevIndexAdjusted = (prevIndex - 1 + imagensArray.length) % imagensArray.length;
        return prevIndexAdjusted;
   });
  }

  function ProximaImagem() {
    setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % imagensArray.length;
        return nextIndex
   });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      ProximaImagem();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.CarrosselImagensCamiseta}>
      <div className={styles.ConteudoCarrossel}>
        <button onClick={ImagemAnterior} className={styles.BotaoAnterior}>
          <img
            className={styles.SetaAnterior}
            src="/assets/Icons/Arrow.svg"
            alt=""
          />
        </button>

        <div className={styles.ImagensDoCarrossel}>
        <div
          className={styles.CarrosselWrapper}
          style={{ transform: `translateX(-${currentIndex * 360}px)`, width: `${imagensArray.length * 360}px` }}
        >
          {imagensArray.map((imagem, index) => (
            <div className={styles.CarrosselItem} key={index}>
              <img src={imagem.src} alt={imagem.alt} />
            </div>
          ))}
        </div>
        </div>

        <button onClick={ProximaImagem} className={styles.BotaoProxima}>
          <img
            className={styles.SetaProximo}
            src="/assets/Icons/Arrow.svg"
            alt=""
          />
        </button>
      </div>

      <div className={styles.Indicadores}>
        {imagensArray.map((_, index) => (
          <div
            key={index}
            className={`${styles.Indicador} ${
              index == currentIndex ? styles.Ativo : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarrosselImagensCamiseta;
