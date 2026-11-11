import cakeImg from "../assets/cake.jpg";
import croissantImg from "../assets/croissant.jpg";
import breadImg from "../assets/bread.jpg";
import cookiesImg from "../assets/cookies.jpg";



export const menuItems = [
  {
    id: 1,
    name: "Chocolate Truffle Cake",
    price: 450,
    category: "Cakes",
    description: "Rich dark chocolate layers with creamy ganache.",
    image:cakeImg,
  },
  {
    id: 2,
    name: "Butter Croissant",
    price: 60,
    category: "Pastries",
    description: "Flaky, golden and baked fresh every morning.",
    image:croissantImg,
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    price: 50,
    category: "Breads",
    description: "Soft, healthy loaf with no preservatives.",
    image:breadImg,
  },
  {
    id: 4,
    name: "Choco Chip Cookies",
    price: 120,
    category: "Cookies",
    description: "Crunchy outside, chewy inside. Box of 6.",
    image:cookiesImg,
  },
];