import BasicExample from "./card";
import "./footer.css";
import b1 from "../photo/b1.png";
import b2 from "../photo/b2.png";
import b3 from "../photo/b3.png";
import b4 from "../photo/b4.png";
import b5 from "../photo/b5.png";
import b6 from "../photo/b6.png";
import b7 from "../photo/b7.png";

export const Beauty = () => {
  const beauty = [
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
  return (
    <>
      <div className="fakeheader"></div>
      <div className="flex">
        {beauty.map((e) => (
          <BasicExample key={e.img} prop={e}></BasicExample>
        ))}
      </div>
    </>
  );
};
