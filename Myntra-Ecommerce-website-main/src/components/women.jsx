import BasicExample from "./card";
import "./footer.css";
import g1 from "../photo/g1.png";
import g2 from "../photo/g2.png";
import g3 from "../photo/g3.png";
import g4 from "../photo/g4.png";
import g5 from "../photo/g5.png";
import g6 from "../photo/g6.png";
import g7 from "../photo/g7.png";
export const Women = () => {
  const woman = [
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
  ];
  return (
    <>
      <div className="fakeheader"></div>
      <div className="flex">
        {woman.map((e) => (
          <BasicExample key={e.img} prop={e}></BasicExample>
        ))}
      </div>
    </>
  );
};
