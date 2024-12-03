import { useState } from "react";
import "./bar.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LuMenu } from "react-icons/lu";
import myntra from "../photo/myntra.png";
import { NavLink } from "react-router-dom";
import { useThemecontext } from "./themecontext";
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const{currenttheme}=useThemecontext();

  return (
    <>
      <LuMenu onClick={handleShow} className="bar" />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header style={currenttheme === "light" ? {backgroundColor:"white"} : {backgroundColor:"#363636",color:"white"}} closeButton></Offcanvas.Header>
       
        <Offcanvas.Body style={currenttheme === "light" ? {backgroundColor:"white"} : {backgroundColor:"#363636",color:"white"}}>
          <div
            className="contain"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <NavLink className="link" to="/men" style={currenttheme === "light" ? {color:"black",margin: "10px 50px"} : {color:"white",margin: "10px 50px"}}   onClick={handleClose}>
              Men
            </NavLink>

            <NavLink
              className="link"
              to="/women"
            style={currenttheme === "light" ? {color:"black",margin: "10px 50px"} : {color:"white",margin: "10px 50px"}} onClick={handleClose}
            >
              Women
            </NavLink>

            <NavLink
              className="link"
              to="/kids"
              style={currenttheme === "light" ? {color:"black",margin: "10px 50px"} : {color:"white",margin: "10px 50px"}} onClick={handleClose}
            >
              Kids
            </NavLink>

            <NavLink
              className="link"
              to="/beauty"
              style={currenttheme === "light" ? {color:"black",margin: "10px 50px"} : {color:"white",margin: "10px 50px"}} onClick={handleClose}
            >
              Beauty
            </NavLink>

            <NavLink
              className="link"
              to="/homeliving"
              style={currenttheme === "light" ? {color:"black",margin: "10px 50px"} : {color:"white",margin: "10px 50px"}} onClick={handleClose}
            >
              Home & living
            </NavLink>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
