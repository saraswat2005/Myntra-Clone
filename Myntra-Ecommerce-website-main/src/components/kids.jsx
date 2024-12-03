import BasicExample from "./card";
import "./footer.css";
import k1 from "../photo/k1.png";
import k2 from "../photo/k2.png";
import k3 from "../photo/k3.png";
import k4 from "../photo/k4.png";
import k5 from "../photo/k5.png";
import k6 from "../photo/k6.png";
import k7 from "../photo/k7.png";

export const Kids = () => {
 
  const kids = [
    {
      id:"kid1",
      img: k1,
      title: "Nautica",
      text: " Boys Pure Cotton Band Collar Premium Opaque Casual Shirt",
      prize: "₹4000",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"kid2",
      img: k2,
      title: "BE AWARA",
      text: " Infant Kids Typography Printed Cotton T-shirt",
      prize: "₹2109",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"kid3",
      img: k3,
      title: "Guugly Wuugly",
      text: " Unisex Kids Graphic Printed Round Neck Cotton T-shirt",
      prize: "₹3599",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"kid4",
      img: k4,
      title: "Guugly Wuugly",
      text: " Boys Slim Fit Clean Look Light Fade Stretchable Jeans",
      prize: "₹5000",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"kid5",
      img: k5,
      title: "Guugly Wuugly",
      text: " Boys Slim Fit Clean Look Light Fade Stretchable Jeans",
      prize: "₹4000",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"kid6",
      img: k6,
      title: "Guugly Wuugly",
      text: "Boys Slim Fit Clean Look Light Fade Stretchable Jeans",
      prize: "₹6509",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
    {
      id:"kid7",
      img: k7,
      title: "Mr Bowerbird",
      text: "Boys Slim Fit Clean Look Light Fade Stretchable Jeans",
      prize: "₹4559",
      prize2: " ₹9999",
      rate: "(64% OFF)",
    },
  ];
  return (
    <>
      <div className="fakeheader"></div>
      <div className="flex">
        {kids.map((e) => (
          <BasicExample key={e.img} prop={e}></BasicExample>
        ))}
      </div>
    </>
  );
};
