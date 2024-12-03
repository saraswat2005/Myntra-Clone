import BasicExample from "./card";
import "./footer.css";
import l1 from "../photo/l1.png";
import l2 from "../photo/l2.png";
import l3 from "../photo/l3.png";
import l4 from "../photo/l4.png";
import l5 from "../photo/l5.png";
import l6 from "../photo/l6.png";
import l7 from "../photo/l7.png";
export const Homeliving = () => {
  const living = [
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
  ];
  return (
    <>
      <div className="fakeheader"></div>
      <div className="flex">
        {living.map((e) => (
          <BasicExample key={e.img} prop={e}></BasicExample>
        ))}
      </div>
    </>
  );
};
