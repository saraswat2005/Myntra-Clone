import BasicExample from "./card";
import "./footer.css";
import men2 from "../photo/men2 .png";
import men1 from "../photo/men1.png";
import men3 from "../photo/men3.png";
import men4 from "../photo/men4.png";
import men5 from "../photo/men5.png";
import men6 from "../photo/men6.png";
import men7 from "../photo/men7.png";
export const Men = () => {
  const man = [
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
  ];
  return (
    <>
      <div className="fakeheader"></div>
      <div className="flex">
        {man.map((e) => (
          <BasicExample key={e.img} prop={e}></BasicExample>
        ))}
      </div>
    </>
  );
};
