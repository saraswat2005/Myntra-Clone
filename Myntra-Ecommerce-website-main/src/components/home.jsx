import photo2 from "../photo/photo2.png";
import men from "../photo/men.png";
import women from "../photo/women.png";
import kids from "../photo/kids.png";
import beauty from "../photo/beauty.png";
import decor from "../photo/decor.png";
import offer from "../photo/offer.png";

import "./footer.css";
import UncontrolledExample from "./carosel";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="fakeheader"></div>
      
      <div className="photo photo2">
        <img src={photo2}></img>
      </div>
      <div className="category">
        <div className="phot">
          <NavLink to="/men">
            <img src={men}></img>
          </NavLink>
        </div>
        <div className="phot">
          <NavLink to="/women">
            <img src={women}></img>
          </NavLink>
        </div>
        <div className="phot">
          <NavLink to="/kids">
            <img src={kids}></img>
          </NavLink>
        </div>
        <div className="phot">
          <NavLink to="/beauty">
            <img src={beauty}></img>
          </NavLink>
        </div>
        <div className="phot">
          <NavLink to="/homeliving">
            <img src={decor}></img>
          </NavLink>
        </div>
      </div>
      <div className="photo offer">
        <a href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059?mt=8">
          <img src={offer}></img>
        </a>
      </div>
    </>
  );
};
