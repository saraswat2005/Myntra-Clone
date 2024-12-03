import Card from "react-bootstrap/Card";

import "./card.css";
import React, { useState } from "react";

import { Cartvalue } from "./cartvalue";
import { NavLink } from "react-router-dom";
import { useCartContext } from "./cartcontext";
import { useThemecontext } from "./themecontext";

function BasicExample({ prop }) {
  const { addtobag } = useCartContext();
  const { currenttheme } = useThemecontext();
  const [value, setvalue] = useState(1);
  const setincrease = () => {
    value < 10 ? setvalue(value + 1) : setvalue(10);
  };
  const setDecrease = () => {
    value > 1 ? setvalue(value - 1) : setvalue(1);
  };
  return (
    <>
      <div className="child">
        <Card style={{ width: "18rem",height:"45rem"}} className="card">
          <NavLink to={`/item/${prop.id}`}>
            <Card.Img
              variant="top"
              src={prop.img}
              style={{ cursor: "pointer" }}
            />
          </NavLink>
          <Card.Body className={currenttheme === "light" ? "cardbody" : "darkcardbody"}>
            <Card.Title>{prop.title}</Card.Title>
            <Card.Text>{prop.text}</Card.Text>
            <Card.Text>
              <span className="bold">{prop.prize}</span> MRP
              <span className="prize"> {prop.prize2} </span>
              <span className="rate"> {prop.rate}</span>
            </Card.Text>
            <Cartvalue
              setDecrease={setDecrease}
              setincrease={setincrease}
              value={value}
            ></Cartvalue>
            <NavLink onClick={() => addtobag(value, prop)}>
             
              <button className={currenttheme === "light" ? "button" : "darkbutton"}>
                Add Item
              </button>
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default BasicExample;
