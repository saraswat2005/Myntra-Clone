import { NavLink } from "react-router-dom";
import "./footer.css";
import { useThemecontext } from "./themecontext";
export const Footer = () => {
  const{currenttheme}=useThemecontext();

  
  return (
    <div className="container footer">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <NavLink to="/" className={currenttheme === "light" ? "nav-link px-2 text-body-secondary foot" : "link px-2 text dd foot"}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/men" className={currenttheme === "light" ? "nav-link px-2 text-body-secondary foot" : "link px-2 text dd foot"}>
              Men
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/women" className={currenttheme === "light" ? "nav-link px-2 text-body-secondary foot" : "link px-2 text dd foot"}>
              Women
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/kids" className={currenttheme === "light" ? "nav-link px-2 text-body-secondary foot" : "link px-2 text dd foot"}>
              Kids
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/beauty" className={currenttheme === "light" ? "nav-link px-2 text-body-secondary foot" : "link px-2 text dd foot"}>
              Beauty
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/homeliving"
              className={currenttheme === "light" ? "nav-link px-2 text-body-secondary foot" : "link px-2 text dd foot"}
            >
              Decor
            </NavLink>
          </li>
        </ul>
        <p className={currenttheme === "light" ?"text-center text-body-secondary":"text-center text--secondary dd"}>© 2024 Company, Inc</p>
      </footer>
    </div>
  );
};
