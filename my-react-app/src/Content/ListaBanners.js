import { useState } from "react";

export const ListaBanners = () => {
    const [Banners, setBanners] = useState({
        banner1: {
            src: "/assets/Banners/Banner1.png",
            link: "#",
            alt: "descricao",
          },
          banner2: {
            src: "/assets/Banners/Banner2.png",
            link: "#",
            alt: "descricao",
          },
          banner3: {
            src: "/assets/Banners/Banner1.png",
            link: "#",
            alt: "descricao",
          },
          banner4: {
            src: "/assets/Banners/Banner2.png",
            link: "#",
            alt: "descricao",
          },
        });
    
    return { Banners, setBanners };
}