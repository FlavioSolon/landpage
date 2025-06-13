import { FiAnchor, FiCompass, FiFlag, FiMapPin, FiNavigation, FiTruck, FiWind } from "react-icons/fi";
import { ICategory } from "@/types";

export const categories: ICategory[] = [
  {
    title: "Fuel Classic",
    description: "Representa o lado mais puro e icónico da cultura automóvel e motard, com desenhos atemporais que celebram a elegância das linhas.",
    bullets: [
      {
        title: "Desenho Atemporal",
        description: "Ilustrações minimalistas destacam silhuetas marcantes de carros e motos lendárias.",
        icon: <FiAnchor size={26} style={{ color: "#ff0000" }} />,
      },
      {
        title: "Estética Clássica",
        description: "Foco num único ângulo para um impacto visual direto e sem distrações.",
        icon: <FiCompass size={26} style={{ color: "#ff0000" }} />,
      },
      {
        title: "Identidade Discreta",
        description: "Ideal para quem vive a paixão pelos motores com estilo carregado de identidade.",
        icon: <FiMapPin size={26} style={{ color: "#ff0000" }} />,
      },
    ],
    imageSrc: "/images/motor.png",
  },
  {
    title: "Fuel Collection",
    description: "O coração artístico da Fuel Head, uma compilação única de ilustrações exclusivas que misturam motores, cultura urbana e histórias com significado.",
    bullets: [
      {
        title: "Obras de Arte",
        description: "Cada peça tem identidade própria, desde a série DL 2.0 até o mítico Caddy do Mancha.",
        icon: <FiFlag size={26} style={{ color: "#ff0000" }} />,
      },
      {
        title: "Locais Icónicos",
        description: "Inspirado em Lisboa, o emblemático VW VR6 e a alma da rua e da garagem.",
        icon: <FiNavigation size={26} style={{ color: "#ff0000" }} />,
      },
      {
        title: "Sem Limites Criativos",
        description: "Uma celebração da cultura automóvel com ilustrações únicas.",
        icon: <FiWind size={26} style={{ color: "#ff0000" }} />,
      },
    ],
    imageSrc: "/images/DL2.0.png",
  },
  {
    title: "Fuel Nation",
    description: "Uma coleção limitada, disruptiva e fora da caixa da Fuel Head, com peças ousadas que desafiam os padrões da arte automóvel.",
    bullets: [
      {
        title: "Rebeldia e Humor",
        description: "Dá voz à comunidade Fuel com conceitos como Happy Gaz e Brain'd Turbo.",
        icon: <FiTruck size={26} style={{ color: "#ff0000" }} />,
      },
      {
        title: "Unicidade Limitada",
        description: "Peças exclusivas e com identidade própria, feitas para os verdadeiros apaixonados.",
        icon: <FiFlag size={26} style={{ color: "#ff0000" }} />,
      },
      {
        title: "Atitude e Estilo",
        description: "Mais do que vestuário, é uma nação que reflete atitude e paixão.",
        icon: <FiWind size={26} style={{ color: "#ff0000" }} />,
      },
    ],
    imageSrc: "/images/HAPPYGAZ.png",
  },
];