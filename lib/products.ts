import type { Product } from "./types";

const L = (
  items: [string, string][],
): Product["lines"] => items.map(([label, value]) => ({ label, value }));

export const productsByCollege: Record<string, Product[]> = {
  "colegio-las-condes": [
    {
      title: "Polera deportiva",
      image: "/img/productos/Colegio_lascondes/CLC_1.webp",
      lines: L([
        ["Precio Polera", "Desde $11.900"],
        ["Material", "Jersey"],
        ["Tipo", "Manga Larga"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Polera Deportiva",
      image: "/img/productos/Colegio_lascondes/CLC_2.webp",
      lines: L([
        ["Precio Polera", "Desde $11.500"],
        ["Material", "Jersey"],
        ["Tipo", "Manga Corta"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Vestimenta Institucional",
      image: "/img/productos/Colegio_lascondes/CLC_3.webp",
      lines: L([
        ["Precio Polerón", "Desde $19.500"],
        ["Material", "Franela Algodón"],
        ["Precio Falda", "Desde $21.500"],
        ["Material", "Casimir Escocés"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Polera Institucional",
      image: "/img/productos/Colegio_lascondes/CLC_4.webp",
      lines: L([
        ["Precio polera", "Desde $13.500"],
        ["Tipo", "Manga Corta"],
        ["Material", "Piqué"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
  ],
  "colegio-coyancura": [
    {
      title: "Vestimenta Deportiva",
      image: "/img/productos/Colegio_Coyancura/CC_1.webp",
      lines: L([
        ["Precio Polera", "Desde $11.500"],
        ["Tipo", "Jersey"],
        ["Precio Buzo", "Desde $14.200"],
        ["Material", "Franela Algodón"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Vestimenta Deportiva",
      image: "/img/productos/Colegio_Coyancura/CC_2.webp",
      lines: L([
        ["Precio Polerón", "Desde $19.500"],
        ["Material", "Franela Algodón"],
        ["Precio Buzo", "Desde $14.200"],
        ["Material", "Franela Algodón"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Vestimenta Institucional",
      image: "/img/productos/Colegio_Coyancura/CC_3.webp",
      lines: L([
        ["Precio Polera", "Desde $13.500"],
        ["Material", "Piqué"],
        ["Precio Falda", "Desde $21.500"],
        ["Tipo", "Casimir Escocés"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Vestimenta Institucional",
      image: "/img/productos/Colegio_Coyancura/CC_4.webp",
      lines: L([
        ["Precio Polerón", "Desde $19.500"],
        ["Material", "Franela Algodón"],
        ["Precio Falda", "Desde $21.500"],
        ["Tipo", "Casimir Escocés"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
  ],
  "colegio-leonardo-da-vinci": [
    {
      title: "Vestimenta deportiva",
      image: "/img/productos/Colegio_Leonardo_da_vinci/CLD_11.webp",
      lines: L([
        ["Precio Buzo", "Desde $14.200"],
        ["Material", "Franela Algodón"],
        ["Tallas disponibles", "4 a XXL"],
        ["Precio Polerón", "Desde $19.500"],
        ["Material", "Franela Algodón"],
      ]),
    },
    {
      title: "Polera deportiva",
      image: "/img/productos/Colegio_Leonardo_da_vinci/CLD_1.webp",
      lines: L([
        ["Precio Polera", "Desde $11.500"],
        ["Tipo", "Jersey"],
        ["Material", "Jersey"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Vestimenta Institucional",
      image: "/img/productos/Colegio_Leonardo_da_vinci/CLD_3.webp",
      lines: L([
        ["Precio Pantalón", "Desde $15.900"],
        ["Material", "Tradicional"],
        ["Tallas disponibles", "4 a XXL"],
        ["Precio Polerón", "Desde $19.500"],
        ["Material", "Franela Algodón"],
      ]),
    },
    {
      title: "Vestimenta Institucional",
      image: "/img/productos/Colegio_Leonardo_da_vinci/CLD_4.webp",
      lines: L([
        ["Precio Polera", "Desde $13.500"],
        ["Material", "Pique"],
        ["Precio Falda", "Desde $17.900"],
        ["Tipo", "Gris"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Vestimenta Institucional",
      image: "/img/productos/Colegio_Leonardo_da_vinci/CLD_9.webp",
      lines: L([
        ["Precio Polerón", "Desde $19.500"],
        ["Material", "Franela Algodón"],
        ["Precio Falda", "Desde $21.500"],
        ["Material", "Casimir Escocés"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
  ],
  "colegio-san-francisco": [
    {
      title: "Vestimenta Deportiva",
      image: "/img/productos/Colegio_san_francisco/CSFTP_1.webp",
      lines: L([
        ["Precio Polera", "Desde $11.500"],
        ["Tipo", "Jersey"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Vestimenta Deportiva",
      image: "/img/productos/Colegio_san_francisco/CSFTP_2.webp",
      lines: L([
        ["Precio Buzo", "Desde $14.200"],
        ["Material", "Franela Algodón"],
        ["Tallas disponibles", "4 a XXL"],
        ["Precio Polerón", "Desde $19.500"],
        ["Material", "Franela Algodón"],
      ]),
    },
    {
      title: "Vestimenta Institucional",
      image: "/img/productos/Colegio_san_francisco/CSFTP_3.webp",
      lines: L([
        ["Precio Polera", "Desde $13.500"],
        ["Tipo", "Pique"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Vestimenta Institucional",
      image: "/img/productos/Colegio_san_francisco/CSFTP_4.webp",
      lines: L([
        ["Precio Polerón", "Desde $19.500"],
        ["Material", "Franela Algodón"],
        ["Precio Falda", "Desde $21.500"],
        ["Tipo", "Falda Escocés"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Vestimenta Deportiva",
      image: "/img/productos/Colegio_san_francisco/CSFTP_5.webp",
      lines: L([
        ["Precio polera", "Desde $11.500"],
        ["Material", "Jersay"],
        ["Precio Buzo", "Desde $14.200"],
        ["Material", "Franela Algodón"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
  ],
  "colegio-simon-bolivar": [
    {
      title: "Vestimenta Institucional",
      image: "/img/productos/Colegio_Simon_bolivar/CSB_1.webp",
      lines: L([
        ["Precio polera", "Desde $13.500"],
        ["Material", "Piqué"],
        ["Precio Falda", "Desde $21.500"],
        ["Tipo", "Falda Escocés"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Vestimenta Institucional",
      image: "/img/productos/Colegio_Simon_bolivar/CSB_2.webp",
      lines: L([
        ["Precio polerón", "Desde $19.500"],
        ["Material", "Franela Fantasía"],
        ["Precio Falda", "Desde $21.500"],
        ["Tipo", "Falda Escocés"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Vestimenta Institucional",
      image: "/img/productos/Colegio_Simon_bolivar/CSB_3.webp",
      lines: L([  
        ["Precio corbata", "Desde $8.900"],
        ["Material", "Franela Fantasía"],
        ["Precio Falda", "Desde $21.500"],
        ["Tipo", "Falda Escocés"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Vestimenta Institucional",
      image: "/img/productos/Colegio_Simon_bolivar/CSB_4.webp",
      lines: L([
        ["Precio camisa", "Desde $11.500"],
        ["Material", "Genérica"],
        ["Precio Falda", "Desde $21.500"],
        ["Tipo", "Falda Escocés"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Polera Deportiva",
      image: "/img/productos/Colegio_Simon_bolivar/CSB_5.webp",
      lines: L([
        ["Precio Polera", "Desde $11.500"],
        ["Material", "Gamuza"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Vestimenta Deportiva",
      image: "/img/productos/Colegio_Simon_bolivar/CSB_6.webp",
      lines: L([
        ["Precio Polerón", "Desde $14.300"],
        ["Material", "Franela Fantasía"],
        ["Precio Buzo", "Desde $14.500"],
        ["Material", "Franela Algodón"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
    {
      title: "Vestimenta Deportiva",
      image: "/img/productos/Colegio_Simon_bolivar/CSB_7.webp",
      lines: L([
        ["Precio Polera", "Desde $11.500"],
        ["Material", "Jersey"],
        ["Precio Buzo", "Desde $14.500"],
        ["Material", "Franela Algodón"],
        ["Tallas disponibles", "4 a XXL"],
      ]),
    },
  ],
};

// Rosario y San Francisco del Alba: rutas con espacios en carpetas del sitio original
productsByCollege["colegio-nuestra-senora-del-rosario"] = [
  {
    title: "Vestimenta Institucional",
    image:
      "/img/productos/Colegio_nuestra señora_del_rosario/CNSR_5.webp",
    lines: L([
      ["Precio Polera", "Desde $13.900"],
      ["Material", "Jersey"],
      ["Precio Pantalón", "Desde $15.900"],
      ["Material", "Tradicional"],
      ["Tallas disponibles", "4 a XXL"],
    ]),
  },
  {
    title: "Vestimenta Institucional",
    image:
      "/img/productos/Colegio_nuestra señora_del_rosario/CNSR_6.webp",
    lines: L([
      ["Precio Polera", "Desde $13.500"],
      ["Material", "Jersey"],
      ["Precio Pantalón", "Desde $15.900"],
      ["Material", "Tradicional"],
      ["Tallas disponibles", "4 a XXL"],
    ]),
  },
  {
    title: "Vestimenta Institucional",
    image:
      "/img/productos/Colegio_nuestra señora_del_rosario/CNSR_10.webp",
    lines: L([
      ["Precio Pantalón", "Desde $15.900"],
      ["Material", "Tradicional"],
      ["Tallas disponibles", "4 a XXL"],
      ["Precio Polerón", "Desde $19.500"],
      ["Material", "Franela Algodón"],
    ]),
  },
  {
    title: "Vestimenta Deportiva",
    image:
      "/img/productos/Colegio_nuestra señora_del_rosario/CNSR_3.webp",
    lines: L([
      ["Precio Polera", "Desde $11.500"],
      ["Tipo", "Jersey"],
      ["Precio Buzo", "Desde $14.200"],
      ["Material", "Franela Algodón"],
      ["Tallas disponibles", "4 a XXL"],
    ]),
  },
  {
    title: "Vestimenta Deportiva",
    image:
      "/img/productos/Colegio_nuestra señora_del_rosario/CNSR_1.webp",
    lines: L([
      ["Tallas disponibles", "10 a XXL"],
      ["Precio Polera", "Desde $11.500"],
      ["Tipo", "Jersey"], 
      ["Precio Buzo", "Desde $14.200"],
      ["Material", "Franela Algodón"],
    ]),
  },
  {
    title: "Vestimenta Deportiva",
    image:
      "/img/productos/Colegio_nuestra señora_del_rosario/CNSR_2.webp",
    lines: L([
      ["Precio Buzo", "Desde $14.200"],
      ["Material", "Franela Algodón"],
      ["Tallas disponibles", "4 a XXL"],
      ["Precio Polerón", "Desde $19.500"],
      ["Material", "Franela Algodón"],
    ]),
  },
  {
    title: "Vestimenta Deportiva",
    image: "/img/productos/Colegio_nuestra señora_del_rosario/CNSR_4.webp",
    lines: L([
      ["Precio Buzo", "Desde $14.200"],
      ["Material", "Franela Algodón"],
      ["Tallas disponibles", "4 a XXL"],
      ["Precio Polerón", "Desde $19.500"],
      ["Material", "Franela Algodón"],
    ]),
  },
  {
    title: "Vestimenta Institucional",
    image:
      "/img/productos/Colegio_nuestra señora_del_rosario/CNSR_8.webp",
    lines: L([
      ["Precio Polera", "Desde $13.900"],
      ["Tipo", "Pique"],
      ["Precio Falda", "Desde $17.900"],
      ["Tipo", "Tablas Azul"],
      ["Tallas disponibles", "4 a XXL"],
    ]),
  },
  {
    title: "Vestimenta Institucional",
    image:
      "/img/productos/Colegio_nuestra señora_del_rosario/CNSR_9.webp",
    lines: L([
      ["Precio Polera", "Desde $13.500"],
      ["Material", "Piquen"],
      ["Precio Falda", "Desde $17.900"],
      ["Tipo", "Tablas Azul"],
      ["Tallas disponibles", "4 a XXL"],
    ]),
  },
  {
    title: "Vestimenta Institucional",
    image:
      "/img/productos/Colegio_nuestra señora_del_rosario/CNSR_10.webp",
    lines: L([
      ["Precio Falda", "Desde $17.900"],
      ["Tipo", "Tablas Azul"],
      ["Tallas disponibles", "4 a XXL"],
      ["Precio Polerón", "Desde $19.500"],
      ["Material", "Franela Algodón"],
    ]),
  },
];

productsByCollege["colegio-san-francisco-del-alba"] = [
  {
    title: "Vestimenta Institucional",
    image: "/img/productos/Colegio_san-francisco-del-alba/CSDA_11.webp",
    lines: L([
      ["Precio Polerón", "Desde $19.500"],
      ["Material", "Franela Algodón"],
      ["Precio Falda", "Desde $21.500"],
      ["Material", "Casimir Escocés"],
      ["Tallas disponibles", "4 a XXL"],
    ]),
  },
  {
    title: "Vestimenta Institucional",
    image: "/img/productos/Colegio_san-francisco-del-alba/CSDA_12.webp",
    lines: L([
      ["Precio camisa", "Desde $11.500"],
      ["Material", "Genérica"],
      ["Precio Falda", "Desde $21.500"],
      ["Material", "Casimir Escocés"],
      ["Tallas disponibles", "4 a XXL"],
    ]),
  },
  {
    title: "Vestimenta deportiva",
    image: "/img/productos/Colegio_san-francisco-del-alba/CSDA_4.webp",
    lines: L([
      ["Precio Polera", "Desde $11.500"],
      ["Material", "Gamuza"],
      ["Precio Buzo", "Desde $14.200"],
      ["Material", "Algodón"],
      ["Tallas disponibles", "4 a XXL"],
    ]),
  },
  {
    title: "Vestimenta deportiva",
    image: "/img/productos/Colegio_san-francisco-del-alba/CSDA_5.webp",
    lines: L([
      ["Precio Buzo", "Desde $14.200"],
      ["Material", "Algodón"],
      ["Tallas disponibles", "4 a XXL"],
      ["Precio Polerón", "Desde $19.500"],
      ["Material", "Franela Algodón"],
    ]),
  },
  {
    title: "Vestimenta Institucional",
    image: "/img/productos/Colegio_san-francisco-del-alba/CSDA_7.webp",
    lines: L([
      ["Precio Polera", "Desde $13.500"],
      ["Material", "Pique"],
      ["Precio Pantalón", "Desde $15.900"],
      ["Material", "Tradicional"],
      ["Tallas disponibles", "4 a XXL"],
    ]),
  },
  {
    title: "Vestimenta Institucional",
    image: "/img/productos/Colegio_san-francisco-del-alba/CSDA_8.webp",
    lines: L([
      ["Precio Pantalón", "Desde $15.900"],
      ["Material", "Tradicional"],
      ["Tallas disponibles", "4 a XXL"],
      ["Precio Polerón", "Desde $19.500"],
      ["Material", "Franela Algodón"],
    ]),
  },
  {
    title: "Vestimenta Institucional",
    image: "/img/productos/Colegio_san-francisco-del-alba/CSDA_10.webp",
    lines: L([
      ["Precio Polera", "Desde $13.500"],
      ["Material", "Pique"],
      ["Precio Falda", "Desde $21.500"],
      ["Material", "Casimir Escocés"],
      ["Tallas disponibles", "4 a XXL"],
    ]),
  },

  {
    title: "Vestimenta Deportiva",
    image:
      "/img/productos/Colegio_san-francisco-del-alba/CSDA_2.webp",
    lines: L([
      ["Precio Polera", "Desde $11.500"],
      ["Tipo", "Manga Corta"],
      ["Detalle", "Deportiva"],
    ]),
  },
  {
    title: "Vestimenta Deportiva",
    image: "/img/productos/Colegio_san-francisco-del-alba/CSDA_1.webp",
    lines: L([
      ["Precio Polera", "Desde $11.900"],
      ["Tipo", "Manga Larga"],
      ["Detalle", "Deportiva"],
    ]),
  },
];

export function getProductsBySlug(slug: string): Product[] {
  return productsByCollege[slug] ?? [];
}
