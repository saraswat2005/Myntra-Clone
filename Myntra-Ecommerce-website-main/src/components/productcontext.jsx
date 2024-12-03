import { createContext } from "react";
import k1 from "../photo/k1.png";
import k2 from "../photo/k2.png";
import k3 from "../photo/k3.png";
import k4 from "../photo/k4.png";
import k5 from "../photo/k5.png";
import k6 from "../photo/k6.png";
import k7 from "../photo/k7.png";
import g1 from "../photo/g1.png";
import g2 from "../photo/g2.png";
import g3 from "../photo/g3.png";
import g4 from "../photo/g4.png";
import g5 from "../photo/g5.png";
import g6 from "../photo/g6.png";
import g7 from "../photo/g7.png";
import men2 from "../photo/men2 .png";
import men1 from "../photo/men1.png";
import men3 from "../photo/men3.png";
import men4 from "../photo/men4.png";
import men5 from "../photo/men5.png";
import men6 from "../photo/men6.png";
import men7 from "../photo/men7.png";
import l1 from "../photo/l1.png";
import l2 from "../photo/l2.png";
import l3 from "../photo/l3.png";
import l4 from "../photo/l4.png";
import l5 from "../photo/l5.png";
import l6 from "../photo/l6.png";
import l7 from "../photo/l7.png";
import b1 from "../photo/b1.png";
import b2 from "../photo/b2.png";
import b3 from "../photo/b3.png";
import b4 from "../photo/b4.png";
import b5 from "../photo/b5.png";
import b6 from "../photo/b6.png";
import b7 from "../photo/b7.png";
export const Product = createContext();
export const ProductProvider = ({ children }) => {
  const items = [
    {
      id: "men1",
      img: men1,
      title: "Mr Bowerbird",
      text: " Pure Cotton Self Design Textured Tailored Fit Casual Blazers",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "men2",
      img: men2,
      title: "Mr Bowerbird",
      text: " Real Madrid Tiro 24 Competition Training Jersey",
      prize: "₹2400",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "men3",
      img: men3,
      title: "GO DEVIL",
      text: "Men Black Solid Round Neck T-shirt",
      prize: "₹6000",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "men4",
      img: men4,
      title: "Mr Bowerbird",
      text: " Men Graphic Printed T-shirt",
      prize: "₹2400",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "men5",
      img: men5,
      title: "Roadster",
      text: " Real Madrid Tiro 24 Competition Training Jersey",
      prize: "₹5000",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "men6",
      img: men6,
      title: "ADIDAS",
      text: " Graphic Printed Drop Shoulder Sleeves Cotton Oversized T-Shirt",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "men7",
      img: men7,
      title: "Roadster",
      text: " Brand Logo Printed Pure Cotton T-shirt",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "women1",
      img: g1,
      title: "Sangria",
      text: " Ethnic Motifs Yoke Design Embroidered Kaftan Kurta & Trouserss",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "women2",
      img: g2,
      title: "GoSriKi",
      text: " Bandhani Printed Round Neck Straight Kurta With Trousers & Dupatta",
      prize: "₹3450",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "women3",
      img: g3,
      title: "Tikhi Imli",
      text: " Pink Woven Design Zari Detail Poly Georgette Bandhani Saree",
      prize: "₹5425",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "women4",
      img: g4,
      title: "Tikhi Imli",
      text: "Sequinned Organza Saree",
      prize: "₹4000",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "women5",
      img: g5,
      title: "KALINI",
      text: "Embroidered Net Sarees",
      prize: "₹7000",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "women6",
      img: g6,
      title: "KALINI",
      text: " Floral Zari Embroidered Chanderi Silk Kurta With Trouser & Sequined Dupatta.",
      prize: "₹6509",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "women7",
      img: g7,
      title: "KALINI",
      text: " Bandhani Printed Round Neck Straight Kurta With Trousers & Dupatta",
      prize: "₹4509",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "kid1",
      img: k1,
      title: "Nautica",
      text: " Boys Pure Cotton Band Collar Premium Opaque Casual Shirt",
      prize: "₹4000",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "kid2",
      img: k2,
      title: "BE AWARA",
      text: " Infant Kids Typography Printed Cotton T-shirt",
      prize: "₹2109",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "kid3",
      img: k3,
      title: "Guugly Wuugly",
      text: " Unisex Kids Graphic Printed Round Neck Cotton T-shirt",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "kid4",
      img: k4,
      title: "Guugly Wuugly",
      text: " Boys Slim Fit Clean Look Light Fade Stretchable Jeans",
      prize: "₹5000",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "kid5",
      img: k5,
      title: "BE AWARA",
      text: " Boys Slim Fit Clean Look Light Fade Stretchable Jeans",
      prize: "₹4000",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "kid6",
      img: k6,
      title: "Guugly Wuugly",
      text: "Boys Slim Fit Clean Look Light Fade Stretchable Jeans",
      prize: "₹6509",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "kid7",
      img: k7,
      title: "BE AWARA",
      text: "Boys Slim Fit Clean Look Light Fade Stretchable Jeans",
      prize: "₹4559",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "home1",
      img: l1,
      title: "Stoa Paris",
      text: " Champagne Solid 4 Piece Double Queen Regular Bedding Set",
      prize: "₹1899",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "home2",
      img: l2,
      title: "Stoa Paris",
      text: " Set of 1 Grey & White 4 Pieces Floral ",
      prize: "₹2659",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "home3",
      img: l3,
      title: "Kuber Industries",
      text: " Champagne Solid 4 Piece Double Queen Regular Bedding Set",
      prize: "₹1599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "home4",
      img: l4,
      title: "Kuber Industries",
      text: " Set of 1 Grey & White 4 Pieces Floral ",
      prize: "4599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "home5",
      img: l5,
      title: "Kuber Industries",
      text: " White & Orange 4 Pieces Floral Cotton Double King Regular Bedding Set",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "home6",
      img: l6,
      title: "Mr Bowerbird",
      text: "White & Orange 4 Pieces Floral Cotton Double King Regular Bedding Set",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "home7",
      img: l7,
      title: "Stoa Paris",
      text: " Champagne Solid 4 Piece Double Queen Regular Bedding Set",
      prize: "₹2599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id: "beauty1",
      img: b1,
      title: "Tresemme",
      text: " Bringha Anti-Hairfall Hair Cleanser Shampoo 340 ml",
      prize: "₹359",
      prize2: " ₹999",
      rate: "(64% OFF)",
    },
    {
      id: "beauty2",
      img: b2,
      title: "LOreal",
      text: " Paris Colour Protect Shampoo 340 ml",
      prize: "₹359",
      prize2: " ₹999",
      rate: "(64% OFF)",
    },
    {
      id: "beauty3",
      img: b3,
      title: "LOreal",
      text: " Anti Hair Fall Shampoo 340 ml",
      prize: "₹650",
      prize2: " ₹999",
      rate: "(64% OFF)",
    },
    {
      id: "beauty4",
      img: b4,
      title: "SHRYOAN",
      text: "New York Colossal Bold Liner - Black - 3ml",
      prize: "₹550",
      prize2: " ₹999",
      rate: "(64% OFF)",
    },
    {
      id: "beauty5",
      img: b5,
      title: "SHRYOAN",
      text: " Soft & Silky Color Eyeshadow - 5 g - Shade - 18",
      prize: "₹780",
      prize2: " ₹999",
      rate: "(64% OFF)",
    },
    {
      id: "beauty6",
      img: b6,
      title: "SHRYOAN",
      text: "Quick Drying Ultra Long-wear Glossy Finish Nail Lacquer 10 ml - Red Rum 18",
      prize: "₹1200",
      prize2: " ₹1999",
      rate: "(64% OFF)",
    },
    {
      id: "beauty7",
      img: b7,
      title: "Earth Rhythm",
      text: " Lip Cheek Tint - Mermaid 5 ml",
      prize: "₹980",
      prize2: " ₹1499",
      rate: "(64% OFF)",
    },
  ];
  return <Product.Provider value={items}>{children}</Product.Provider>;
};
