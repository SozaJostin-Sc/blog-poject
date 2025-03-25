import Card from "../components/Card";
import React from "react";

interface CardData {
  id: string;
  tittle: string;
  datetime: string;
  category: string;
  body: string;
}

const cardsData: CardData[] = [
  {
    id: "ia",
    tittle: "Los Últimos Avances en Inteligencia Artificial",
    datetime: "2025-03-24",
    category: "Tecnología",
    body: "La inteligencia artificial sigue evolucionando a pasos agigantados. Recientes avances en modelos de lenguaje y visión por computadora están revolucionando industrias enteras.",
  },
  {
    id: "cuantica",
    tittle: "El Futuro de la Computación Cuántica",
    datetime: "2025-03-24",
    category: "Tecnología",
    body: "La computación cuántica promete cambiar la forma en que resolvemos problemas complejos. Empresas como IBM y Google están desarrollando procesadores cuánticos.",
  },
  {
    id: "renacimiento",
    tittle: "El Renacimiento y su Impacto en el Arte Moderno",
    datetime: "2025-03-24",
    category: "Arte",
    body: "El Renacimiento fue una de las épocas más influyentes en la historia del arte. Grandes maestros como Leonardo da Vinci y Miguel Ángel sentaron las bases.",
  },
  {
    id: "abstracto",
    tittle: "El Arte Abstracto: Expresión sin Límites",
    datetime: "2025-03-24",
    category: "Arte",
    body: "El arte abstracto rompió con las reglas tradicionales de la representación visual. Artistas como Kandinsky y Pollock exploraron la emoción y la forma.",
  },
  {
    id: "realidadAumentada",
    tittle: "Realidad Aumentada: Transformando Nuestra Percepción",
    datetime: "2025-03-25",
    category: "Tecnología",
    body: "La realidad aumentada está eliminando las barreras entre lo digital y lo físico. Desde aplicaciones en retail hasta entrenamiento médico.",
  },
  {
    id: "impresionismo",
    tittle: "El Impresionismo: Capturando la Luz y el Momento",
    datetime: "2025-03-25",
    category: "Arte",
    body: "Los impresionistas como Monet y Renoir revolucionaron el arte al pintar al aire libre, capturando los efectos cambiantes de la luz.",
  },
  {
    id: "arteDigital",
    tittle: "Arte Digital: La Nueva Frontera Creativa",
    datetime: "2025-03-26",
    category: "Arte",
    body: "El arte digital está redefiniendo los límites de la creatividad con herramientas como inteligencia artificial, realidad virtual y NFTs.",
  },
  {
    id: "iot",
    tittle: "Internet de las Cosas (IoT): Conectando el Mundo",
    datetime: "2025-03-27",
    category: "Tecnología",
    body: "El Internet de las Cosas está transformando hogares, industrias y ciudades. Dispositivos inteligentes interconectados están revolucionando la eficiencia y la comodidad.",
  },
];

interface PostCardProps {
  limit?: number;
  category?: string; // Nueva prop para filtrar por categoría
}

const PostCard: React.FC<PostCardProps> = ({ limit, category }) => {
  // Filtra las tarjetas según la categoría si se proporciona
  const filteredCards = category
    ? cardsData.filter((card) => card.category === category)
    : cardsData;

  return (
    <>
      {filteredCards.slice(0, limit ?? filteredCards.length).map((card) => (
        <Card
          key={card.id}
          tittle={card.tittle}
          datetime={card.datetime}
          category={card.category}
          body={card.body}
          buttonRoute={`/posts/${card.id}`}
          link={`/post/${card.category}`}
        />
      ))}
    </>
  );
};

export { cardsData };
export default PostCard;
