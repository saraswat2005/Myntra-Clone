import { useContext } from "react";
import { Product } from "./productcontext";
import { NavLink, useParams } from "react-router-dom";
import style from "./item.module.css";
import { useCartContext } from "./cartcontext";
import { Cartvalue } from "./cartvalue";
import React, { useState } from "react";

export const Item = () => {
  const items = useContext(Product);
  const params = useParams();

  const products = items.map((ele) => ele.id === params.itemid && ele);

  const product = [];
  products.filter((ele) => {
    if (ele !== false) {
      product.push(ele);
    }
  });

  const { addtobag } = useCartContext();
  const [value, setvalue] = useState(1);
  const setincrease = () => {
    value < 10 ? setvalue(value + 1) : setvalue(10);
  };
  const setDecrease = () => {
    value > 1 ? setvalue(value - 1) : setvalue(1);
  };
  return (
    <>
      <div className={style.fakeheader}></div>
      <div className={style.main}>
        <div className={style.photo}>
          <img className={style.productimage} src={product[0].img}></img>
        </div>
        <div className={style.maindetails}>
          <h3>{product[0].title}</h3>
          <p>{product[0].text}</p>
          <span>MRP</span>
          <span>{product[0].prize}</span>
          <p>inclusive all taxes</p>
          <h5>Select Size</h5>
          <div className={style.sizing}>
            <button className={style.sizebutton}>S</button>
            <button className={style.sizebutton}>M</button>
            <button className={style.sizebutton}>L</button>
            <button className={style.sizebutton}>XL</button>
          </div>
          <Cartvalue
            className={style.inc}
            setDecrease={setDecrease}
            setincrease={setincrease}
            value={value}
          ></Cartvalue>

          <NavLink onClick={() => addtobag(value, product[0])}>
          
            <button className={style.button}>Add Item</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
