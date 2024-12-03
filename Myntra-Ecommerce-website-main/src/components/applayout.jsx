import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "./footer"
 const Applayout=()=>{
  return(<>
  <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
  </>)  
}
export default Applayout