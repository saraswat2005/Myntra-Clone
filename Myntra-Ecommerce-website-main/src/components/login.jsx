import style from "./login.module.css";
import { NavLink, useNavigate } from "react-router-dom"
import { useThemecontext } from "./themecontext";
export const Login = () => {
  const { currenttheme } = useThemecontext()
  return (
    <>
    
      <div className={style.fakeheader}></div>
     <div className={currenttheme === "light" ? `${style.fullbody}` : `${style.darkfullbody}`}>
     <div className={currenttheme === "light" ? `${style.body}` : `${style.darkbody}`}>
        <div className={style.topic}>Login or Signup</div>
        <div className={style.name}></div>
        <input className={style.input} type="text" placeholder="Enter Name"></input>
        <input className={style.input} type="number" placeholder="+91 | Mobile Number"></input>
        <input className={style.input} type="email" placeholder="Enter email"></input>
        <input className={style.input} type="password" placeholder="Enter password"></input>
        <button className={style.button}>Submit</button>
        <span>Have logging Trouble in?</span>
        <NavLink to="https://www.myntra.com/contactus" className={style.gethelp}>
        <span  className={style.gethelp}>Get Help</span></NavLink>
       
      </div>
     </div>
    </>
  );
};
