// Interfaces
interface Rifa {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  fechaSorteo: string;
  imagen: string;
  numerosDisponibles: number;
  numerosTotales: number; 
}

interface HeaderInformation {
  titleFirstIcon: string;
  titleFirstIconType: string;
  title: string;
  titleSecondIcon: string;
  titleSecondIconType: string;
  themeColors?: any;
}

interface CategorySection {
  id: string;
  categoria: string;
  headerInformation: HeaderInformation;
  content: {
    rifas: Rifa[];
  };
}




  export const ejemploRifas: Rifa[] = [
    {
      id: 1,
      titulo: "Sorteo Chanel Nº5",
      descripcion: "Gana el icónico perfume Chanel Nº5, símbolo de elegancia y sofisticación.",
      precio: 5,
      fechaSorteo: "2025-09-20T00:00:00Z",
      imagen: "https://m.media-amazon.com/images/I/41tEJylR89L._SL1081_.jpg",
      numerosDisponibles: 10,
      numerosTotales: 100,
    },
    {
      id: 2,
      titulo: "Sorteo Dior Sauvage",
      descripcion: "Participa para ganar Sauvage de Dior, una fragancia fresca e intensa.",
      precio: 5,
      fechaSorteo: "2025-09-22T00:00:00Z",
      imagen: "https://static.sweetcare.com/img/prd/488/v-638200521013099936/dior-008555di_01.jpg",
      numerosDisponibles: 15,
      numerosTotales: 100,
    },
    {
      id: 3,
      titulo: "Sorteo Bleu de Chanel",
      descripcion: "Una fragancia masculina sofisticada para el hombre moderno.",
      precio: 6,
      fechaSorteo: "2025-09-25T00:00:00Z",
      imagen: "https://fimgs.net/mdimg/perfume/375x500.9099.jpg",
      numerosDisponibles: 8,
      numerosTotales: 100,
    },
    {
      id: 4,
      titulo: "Sorteo Carolina Herrera 212 VIP",
      descripcion: "Destaca con la fragancia 212 VIP, intensa y urbana.",
      precio: 4,
      fechaSorteo: "2025-10-01T00:00:00Z",
      imagen: "https://fraganciasdirectas.com/cdn/shop/products/125931.jpg?v=1685997954",
      numerosDisponibles: 25,
      numerosTotales: 100,
    },
    {
      id: 5,
      titulo: "Sorteo Paco Rabanne Invictus",
      descripcion: "Una fragancia vibrante y llena de energía para campeones.",
      precio: 5,
      fechaSorteo: "2025-10-05T00:00:00Z",
      imagen: "https://siman.vtexassets.com/arquivos/ids/1716458/446272000001_1a.jpg?v=637672455611130000",
      numerosDisponibles: 40,
      numerosTotales: 100,
    },
    {
      id: 6,
      titulo: "Sorteo Jean Paul Gaultier Le Male",
      descripcion: "Gana una de las fragancias más emblemáticas para hombre.",
      precio: 5,
      fechaSorteo: "2025-10-10T00:00:00Z",
      imagen: "https://perfumeriafirst.com/cdn/shop/products/SJP-7015_8435415032360.png?v=1691758852&width=1946",
      numerosDisponibles: 12,
      numerosTotales: 100,
    },
    {
      id: 7,
      titulo: "Sorteo Versace Eros",
      descripcion: "Perfume masculino con notas intensas y seductoras.",
      precio: 4,
      fechaSorteo: "2025-10-12T00:00:00Z",
      imagen: "https://grandmallnicaragua.com.ni/wp-content/uploads/2020/06/8011003809219.jpg",
      numerosDisponibles: 18,
      numerosTotales: 100,
    },
    {
      id: 8,
      titulo: "Sorteo Giorgio Armani Acqua di Gio",
      descripcion: "Frescura marina y elegancia en una sola botella.",
      precio: 6,
      fechaSorteo: "2025-10-15T00:00:00Z",
      imagen: "https://static.sweetcare.com/img/prd/488/v-638472469932591046/giorgio-armani-012347gi-1.webp",
      numerosDisponibles: 9,
      numerosTotales: 100,
    },
    {
      id: 9,
      titulo: "Sorteo Yves Saint Laurent Y",
      descripcion: "Perfume para hombres audaces y elegantes.",
      precio: 5,
      fechaSorteo: "2025-10-18T00:00:00Z",
      imagen: "https://static.sweetcare.com/img/prd/488/v-638200527144838043/yves-saint-laurent-008932ys-3.webp",
      numerosDisponibles: 5,
      numerosTotales: 100,
    },
    {
      id: 10,
      titulo: "Sorteo Gucci Guilty",
      descripcion: "Una fragancia provocadora y sensual para él.",
      precio: 6,
      fechaSorteo: "2025-10-20T00:00:00Z",
      imagen: "https://siman.vtexassets.com/arquivos/ids/807236-800-800?v=637341585213130000&width=800&height=800&aspect=true",
      numerosDisponibles: 30,
      numerosTotales: 100,
    },
  ];

  export const ejemploRifasElectronica: Rifa[] = [
    {
      id: 11,
      titulo: "Sorteo iPhone 15 Pro",
      descripcion: "Gana el último iPhone 15 Pro con cámara profesional y chip A17 Pro.",
      precio: 10,
      fechaSorteo: "2025-09-25T00:00:00Z",
      imagen: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=jpeg&qlt=80&.v=1692936888362",
      numerosDisponibles: 50,
      numerosTotales: 100,
    },
    {
      id: 12,
      titulo: "Sorteo PlayStation 5",
      descripcion: "Participa para ganar una consola PS5 con mando DualSense.",
      precio: 8,
      fechaSorteo: "2025-10-01T00:00:00Z",
      imagen: "https://cdn.pocket-lint.com/r/s/970x/assets/images/152400-games-review-playstation-5-review-image1-viv6b2jvzy.jpg",
      numerosDisponibles: 40,
      numerosTotales: 100,
    },
    {
      id: 13,
      titulo: "Sorteo Samsung Galaxy S24 Ultra",
      descripcion: "Obtén el nuevo Galaxy S24 Ultra con cámara de 200MP.",
      precio: 9,
      fechaSorteo: "2025-10-08T00:00:00Z",
      imagen: "https://images.samsung.com/is/image/samsung/p6pim/co/2401/gallery/co-galaxy-s24-s928-sm-s928bzteltp-thumb-539989852",
      numerosDisponibles: 45,
      numerosTotales: 100,
    },
    {
      id: 14,
      titulo: "Sorteo AirPods Pro (2da generación)",
      descripcion: "Audífonos inalámbricos con cancelación activa de ruido.",
      precio: 5,
      fechaSorteo: "2025-10-12T00:00:00Z",
      imagen: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1660803972361",
      numerosDisponibles: 60,
      numerosTotales: 100,
    },
    {
      id: 15,
      titulo: "Sorteo Apple Watch Series 9",
      descripcion: "Reloj inteligente con funciones avanzadas de salud y fitness.",
      precio: 6,
      fechaSorteo: "2025-10-20T00:00:00Z",
      imagen: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTP3ref_VW_34FR+watch-case-45-alum-starlight-nc-9s_VW_34FR_WF_CO+watch-face-45-alum-starlight-nc-s9_VW_34FR_WF_CO?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1693704771891",
      numerosDisponibles: 55,
      numerosTotales: 100,
    },
  ];
  
  export const ejemploRifasModa: Rifa[] = [
    {
      id: 16,
      titulo: "Sorteo Zapatillas Nike Air Jordan 1",
      descripcion: "Gana unas icónicas Air Jordan 1, símbolo del estilo urbano.",
      precio: 5,
      fechaSorteo: "2025-09-28T00:00:00Z",
      imagen: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/3a3d3ad1-e49c-4b12-b45e-502a83575c11/air-jordan-1.jpg",
      numerosDisponibles: 35,
      numerosTotales: 100,
    },
    {
      id: 17,
      titulo: "Sorteo Bolso Louis Vuitton Neverfull",
      descripcion: "Participa para ganar este exclusivo bolso de lujo.",
      precio: 8,
      fechaSorteo: "2025-10-03T00:00:00Z",
      imagen: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bolso-neverfull-mm-damier-ebene-bolsos-de-mano--N40599_PM2_Front%20view.jpg",
      numerosDisponibles: 45,
      numerosTotales: 100,
    },
    {
      id: 18,
      titulo: "Sorteo Reloj Michael Kors Dorado",
      descripcion: "Un reloj elegante y moderno para complementar tu look.",
      precio: 4,
      fechaSorteo: "2025-10-07T00:00:00Z",
      imagen: "https://m.media-amazon.com/images/I/71xQFMvheZL._AC_UY1000_.jpg",
      numerosDisponibles: 55,
      numerosTotales: 100,
    },
    {
      id: 19,
      titulo: "Sorteo Gafas de sol Ray-Ban",
      descripcion: "Estilo atemporal con las clásicas gafas Ray-Ban.",
      precio: 3,
      fechaSorteo: "2025-10-14T00:00:00Z",
      imagen: "https://cdn.laredoute.com/products/580by580/f/c/e/fce6f65dfb198da101291154198b3c85.jpg",
      numerosDisponibles: 50,
      numerosTotales: 100,
    },
    {
      id: 20,
      titulo: "Sorteo Chaqueta The North Face",
      descripcion: "Perfecta para el invierno, comodidad y estilo en uno.",
      precio: 6,
      fechaSorteo: "2025-10-22T00:00:00Z",
      imagen: "https://cdn.thenorthface.com/media/catalog/product/cache/1/image/700x933/9df78eab33525d08d6e5fb8d27136e95/n/f/nf0a4qyx_jk3_1.jpg",
      numerosDisponibles: 48,
      numerosTotales: 100,
    },
  ];
  
  
export const homeDataByCategories: CategorySection[] = [
  {
    id:'1',
    categoria: "Perfumes",
    headerInformation: {
      titleFirstIcon: "",
      titleFirstIconType: "",
      title: "Perfumes",
      titleSecondIcon: "",
      titleSecondIconType: "",
    },
    content: {
      rifas: ejemploRifas,
    },
  },
  {
    id:'2',
    categoria: "Moda",
    headerInformation: {
      titleFirstIcon: "",
      titleFirstIconType: "",
      title: "Moda",
      titleSecondIcon: "",
      titleSecondIconType: "",
      themeColors: null,
    },
    content: {
      rifas: ejemploRifasModa,
    },
  },
  {
    id:'3',
    categoria: "Electronica",
    headerInformation: {
      titleFirstIcon: "",
      titleFirstIconType: "",
      title: "Electronica",
      titleSecondIcon: "",
      titleSecondIconType: "",
    },
    content: {
      rifas: ejemploRifasElectronica,
    },
  },

];




  