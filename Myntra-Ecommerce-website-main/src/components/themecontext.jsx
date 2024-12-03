import { createContext, useContext, useState } from "react";

export const Themecontext=createContext();

export const Themeprovider=({children})=>{

  const [currenttheme,setmode]=useState("light")
  const setthemecontext=(value)=>{
     setmode(value)}
    return( <Themecontext.Provider value={{currenttheme,setthemecontext}}>{children}</Themecontext.Provider>)
}
export const useThemecontext=()=>{
    return useContext(Themecontext)
}
