import { useState } from "react";

export const ListaProdutosEmDestaque = () => {
    const [ProdutosEmDestaque, setProdutosEmDestaque] = useState({
        camisetaRedBull: {
            imgFrente: "/assets/Camisetas/CamisetaRedbull.png",
            imgTras: "/assets/Camisetas/CamisetaRedbull.png",
            nome: "RIVALS COLLECTIONS 2024 | REDBULL",
            preco: "R$ 59,99",
            prestacoes: "2x de r$ 29,99",
            linkPaginaCamiseta: "/Camiseta2",
          },
          camisetaMCLaren: {
            imgFrente: "/assets/Camisetas/CamisetaMCLaren.png",
            imgTras: "/assets/Camisetas/CamisetaRedbull.png",
            nome: "RIVALS COLLECTIONS 2024 | MCLAREN",
            preco: "R$ 59,99",
            prestacoes: "2x de r$ 29,99",
            linkPaginaCamiseta: "/Camiseta1",
          },
          camisetaRedBull2: {
            imgFrente: "/assets/Camisetas/CamisetaRedbull.png",
            imgTras: "/assets/Camisetas/CamisetaRedbull.png",
            nome: "RIVALS COLLECTIONS 2024 | REDBULL",
            preco: "R$ 59,99",
            prestacoes: "2x de r$ 29,99",
            linkPaginaCamiseta: "/Camiseta2",
          },
          camisetaMCLaren2: {
            imgFrente: "/assets/Camisetas/CamisetaMCLaren.png",
            imgTras: "/assets/Camisetas/CamisetaRedbull.png",
            nome: "RIVALS COLLECTIONS 2024 | MCLAREN",
            preco: "R$ 59,99",
            prestacoes: "2x de r$ 29,99",
            linkPaginaCamiseta: "/Camiseta1",
          },
          camisetaRedBull3: {
            imgFrente: "/assets/Camisetas/CamisetaRedbull.png",
            imgTras: "/assets/Camisetas/CamisetaRedbull.png",
            nome: "RIVALS COLLECTIONS 2024 | REDBULL",
            preco: "R$ 59,99",
            prestacoes: "2x de r$ 29,99",
            linkPaginaCamiseta: "/Camiseta2",
          },
          camisetaMCLaren3: {
            imgFrente: "/assets/Camisetas/CamisetaMCLaren.png",
            imgTras: "/assets/Camisetas/CamisetaRedbull.png",
            nome: "RIVALS COLLECTIONS 2024 | MCLAREN",
            preco: "R$ 59,99",
            prestacoes: "2x de r$ 29,99",
            linkPaginaCamiseta: "/Camiseta1",
          },
          camisetaRedBull4: {
            imgFrente: "/assets/Camisetas/CamisetaRedbull.png",
            imgTras: "/assets/Camisetas/CamisetaRedbull.png",
            nome: "RIVALS COLLECTIONS 2024 | REDBULL",
            preco: "R$ 59,99",
            prestacoes: "2x de r$ 29,99",
            linkPaginaCamiseta: "/Camiseta2",
          },
          camisetaMCLaren4: {
            imgFrente: "/assets/Camisetas/CamisetaMCLaren.png",
            imgTras: "/assets/Camisetas/CamisetaRedbull.png",
            nome: "RIVALS COLLECTIONS 2024 | MCLAREN",
            preco: "R$ 59,99",
            prestacoes: "2x de r$ 29,99",
            linkPaginaCamiseta: "/Camiseta1",
          },
    });

    return { ProdutosEmDestaque, setProdutosEmDestaque };
}

