import { useState } from "react";

export const ListaProdutos = () => {
    const [Produtos, setProdutos] = useState({
        camisetaRedBull: {
            imagens: [
              {src: "/assets/Camisetas/CamisetaRedbull.png", alt: "alt"},
              {src: "/assets/Camisetas/CamisetaRedbull.png", alt: "alt"},
              {src: "/assets/Camisetas/CamisetaRedbull.png", alt: "alt"}, 	
            ],
            nome: "RIVALS COLLECTIONS 2024 | REDBULL",
            preco: "R$ 59,99",
          },
          camisetaMCLaren: {
            imagens: [
              {src: "/assets/Camisetas/CamisetaMCLaren.png", alt: "alt"},
              {src: "/assets/Camisetas/CamisetaMCLaren.png", alt: "alt"},
              {src: "/assets/Camisetas/CamisetaMCLaren.png", alt: "alt"},
            ],
            nome: "RIVALS COLLECTIONS 2024 | MCLAREN",
            preco: "R$ 59,99",
          },
    });

    return { Produtos, setProdutos };
}