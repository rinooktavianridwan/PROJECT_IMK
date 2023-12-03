import malangCityImg from "../assets/Malang_City.png";

export const popUpNav = [
  // Menu Berita
  {
    id: 1,
    no: 1,
    buttonText: "Ekonomi",
    path: "/beritaEkonomi",
  },
  {
    id: 1,
    no: 2,
    buttonText: "Kesehatan",
    path: "/beritaKesehatan",
  },
  {
    id: 1,
    no: 3,
    buttonText: "Pemerintahan",
    path: "/beritaPemerintahan",
  },
  {
    id: 1,
    no: 4,
    buttonText: "Pendidikan",
    path: "/beritaPendidikan",
  },
  {
    id: 1,
    no: 5,
    buttonText: "Teknologi",
    path: "/beritaTeknologi",
  },

  // Menu Layanan
  {
    id: 2,
    no: 1,
    buttonText: "Kependudukan",
    path: "/layananKependudukan",
  },
  {
    id: 2,
    no: 2,
    buttonText: "Kesehatan",
    path: "/layananKesehatan",
  },

  // Menu Dokumen
  {
    id: 4,
    no: 1,
    buttonText: "Dokumen",
    path: "/dokumen",
  },

  // Menu Profil
  {
    id: 5,
    no: 1,
    buttonText: "Profil",
    path: "/profil",
  },
];

export const navLinks = [
  {
    id: 1,
    path: "beritaEkonomi",
    text: "Berita Daerah",
  },
  {
    id: 2,
    path: "layanan",
    text: "Layanan Daerah",
  },
  {
    id: 3,
    path: "",
    Image: malangCityImg,
    imageSize: { width: "70px", height: "70px" },
  },
  {
    id: 4,
    path: "dokumen",
    text: "Dokumen",
  },
  {
    id: 5,
    path: "profil",
    text: "Profil Daerah",
  },
];