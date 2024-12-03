import "./header.css";
import { useCartContext } from "./cartcontext";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import Example from "./sidebar";
import { React, useContext, useEffect, useState } from "react";
import { Themecontext, useThemecontext } from "./themecontext";

export const Header = () => {
  const { setthemecontext } = useThemecontext();
  const [theme, settheme] = useState(<IoMoonOutline />);
  const { currenttheme } = useThemecontext();
  const handleTheme = () => {
    if (currenttheme === "light") {

      settheme(<IoSunnyOutline />);
      setthemecontext("dark");
    } else if (currenttheme === "dark") {
      settheme(<IoMoonOutline />);
      setthemecontext("light");
    }
  };
useEffect(()=>{
  document.body.className=currenttheme
},[currenttheme])
  const { cart } = useCartContext();
  var itemscount = 0;
  {
    cart.map((ele) => (itemscount += ele.amount));
  }
 
  return (
    <>
    
      <div className={currenttheme === "light" ? "header" : "darkheader"}>
        <Example></Example>
        <div className="img">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://brandlogos.net/wp-content/uploads/2022/03/myntra-logo-brandlogos.net_-512x512.png"
              alt="Myntra"
              width="50"
            />
          </NavLink>
        </div>
        <div className="groups">
          <ul className="list">
            <li className="nav">
              <NavLink
                className={currenttheme === "light" ? "link" : "darklink"}
                to="/men"
              >
                Men
              </NavLink>
            </li>
            <li className="nav">
              <NavLink
                className={currenttheme === "light" ? "link" : "darklink"}
                to="/women"
              >
                Women
              </NavLink>
            </li>
            <li className="nav">
              <NavLink
                className={currenttheme === "light" ? "link" : "darklink"}
                to="/kids"
              >
                Kids
              </NavLink>
            </li>

            <li className="nav">
              <NavLink
                className={currenttheme === "light" ? "link" : "darklink"}
                to="/beauty"
              >
                Beauty
              </NavLink>
            </li>
            <li className="nav">
              <NavLink
                className={currenttheme === "light" ? "link" : "darklink"}
                to="/homeliving"
              >
                Home & living
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={currenttheme === "light" ? "search" : "darksearch"}>
          <HiOutlineMagnifyingGlass />
          <input
            className={currenttheme === "light" ? "input" : "darkinput"}
            type="text"
            placeholder="Search for products,brands and more"
          ></input>
        </div>
        <div className="theme" onClick={() => handleTheme()}>
          {theme}
        </div>
        <NavLink
          className={
            currenttheme === "light" ? "profile adjust" : "darklink darkadjust"
          }
          to="/login"
        >
          <IoPersonOutline />
          <p>Profile</p>
        </NavLink>
        <NavLink
          className={
            currenttheme === "light" ? "bag adjust" : "darklink darkadjust"
          }
          to="/bag"
        >
          <div className="box">
            <BsHandbag />

            <div className="circle">{itemscount}</div>
          </div>

          <p>Bag</p>
        </NavLink>
      </div>
    </>
  );
};
