import type { Category, College } from "./types";

export const SITE = {
  name: "Styloschool",
  tagline: "Atrévete y marca la diferencia",
  subtitle: "Tu imagen en nuestras manos!",
  description:
    "Tienda de uniformes escolares y ropa corporativa. Atrévete y marca la diferencia, Tu imagen en nuestras manos!",
  address:
    "Av. Apoquindo 6415, Las Condes (Galería Rampa de las Flores) - Local 111 - piso 4",
  phones: ["+569 6359 3710", "2 3224 7874"],
  email: "styloschool@gmail.com",
  hours: ["L / V: 11:00am a 19:00pm", "S: 11:00am a 14:00 pm"],
  whatsapp: "56963593710",
  social: {
    facebook:
      "https://www.facebook.com/people/Styloschool-Uniformes/100057278446525/",
    instagram: "https://www.instagram.com/styloschool/",
  },
} as const;

export const categories: Category[] = [
  {
    title: "Uniformes Escolares",
    image: "/img/categorias/uniformes_escolares.webp",
    href: "/colegios",
  },
  {
    title: "Vestuario Corporativo",
    image: "/img/categorias/Ropa-corporativa.webp",
    href: "/no-disponible",
  },
  {
    title: "Uniformes Genéricos",
    image: "/img/categorias/uniforme-generico.webp",
    href: "/no-disponible",
  },
  {
    title: "Ropa Deportiva",
    image: "/img/categorias/deporte.webp",
    href: "/no-disponible",
  },
  {
    title: "Merchandising",
    image: "/img/categorias/mercancia.webp",
    href: "/no-disponible",
  },
  {
    title: "Otros",
    image: "/img/categorias/mercancia.webp",
    href: "/no-disponible",
  },
];

export const colleges: College[] = [
  {
    slug: "colegio-las-condes",
    name: "Colegio Las Condes",
    image: "/img/Colegios/Colegio_las_condes.webp",
  },
  {
    slug: "colegio-coyancura",
    name: "Colegio Coyancura",
    image: "/img/Colegios/Coyancura.webp",
  },
  {
    slug: "colegio-nuestra-senora-del-rosario",
    name: "Colegio Nuestra Señora del Rosario",
    image: "/img/Colegios/Nuestra_senora_del-rosario.webp",
  },
  {
    slug: "colegio-leonardo-da-vinci",
    name: "Colegio Leonardo Da Vinci",
    image: "/img/Colegios/Leonardo_da_vinci.webp",
  },
  {
    slug: "colegio-san-francisco-del-alba",
    name: "Colegio San Francisco del Alba",
    shortName: "San Francisco Del Alba",
    image: "/img/Colegios/San_francisco_del_alba.webp",
  },
  {
    slug: "colegio-san-francisco",
    name: "Colegio San Francisco Técnico Profesional",
    image: "/img/Colegios/San_franciso_profesional.webp",
  },
  {
    slug: "colegio-simon-bolivar",
    name: "Liceo Bicentenario Simón Bolivar",
    image: "/img/Colegios/Liceo-simonbolivar.webp",
  },
];

export const carouselDesktop = [
  { src: "/img/banner1.webp", alt: "Styloschool - uniformes escolares" },
  {
    src: "/img/banner2-v2.webp",
    alt: "Horarios de atención Styloschool",
  },
];

export const carouselMobile = [
  { src: "/img/banner-re1.webp", alt: "Styloschool" },
  {
    src: "/img/responsive-banner2-v2.webp",
    alt: "Horarios de atención",
  },
];

export function getCollegeBySlug(slug: string): College | undefined {
  return colleges.find((c) => c.slug === slug);
}
