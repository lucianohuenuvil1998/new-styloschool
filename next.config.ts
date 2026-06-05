// import type { NextConfig } from "next";

// const collegeRedirects = [
//   "colegio-las-condes",
//   "colegio-coyancura",
//   "colegio-nuestra-senora-del-rosario",
//   "colegio-leonardo-da-vinci",
//   "colegio-san-francisco-del-alba",
//   "colegio-san-francisco",
//   "colegio-simon-bolivar",
// ].flatMap((slug) => [
//   {
//     source: `/pages/${slug}`,
//     destination: `/colegios/${slug}`,
//     permanent: true,
//   },
//   {
//     source: `/pages/${slug}.html`,
//     destination: `/colegios/${slug}`,
//     permanent: true,
//   },
// ]);

// const nextConfig: NextConfig = {
//   async redirects() {
//     return [
//       { source: "/colegios", destination: "/colegios", permanent: true },
//       {
//         source: "/colegios.html",
//         destination: "/colegios",
//         permanent: true,
//       },
//       {
//         source: "/pages/no-disponible",
//         destination: "/no-disponible",
//         permanent: true,
//       },
//       {
//         source: "/pages/no-disponible.html",
//         destination: "/no-disponible",
//         permanent: true,
//       },
//       ...collegeRedirects,
//     ];
//   },
// };

// export default nextConfig;

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;