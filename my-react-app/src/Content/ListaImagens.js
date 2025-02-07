import { useState } from "react";

export const ListaImagens = () => {
    const [Imagem, setImagem] = useState({
        competicao: {
          src: "/assets/Imagens/imagemCompeticao.png",
          alt: "alt",
        },
    });

    return { Imagem, setImagem };
}