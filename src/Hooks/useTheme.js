import { useEffect } from "react";
import { useState } from "react";

export const useTheme = () => {
  const [mode, setMode] = useState("light");
  function changeTheme () {
    const html = document.documentElement;
    if (mode == "light") {
      html.classList.remove("light"); 
      html.classList.add("dark");
      setMode("dark");
      localStorage.setItem("mode", "dark")
    }
    else {
      html.classList.remove("dark"); 
      html.classList.add("light");
      setMode("light");
      localStorage.setItem("mode", "light")
    }
    useEffect(()=> {
       const currentmode = localStorage.getItem("mode") || "light";
       const html = document.documentElement;
       html.classList.add(currentmode);
       if (currentmode) {
        setMode(currentmode);
       }
       else {
        setMode("light")
       }
    },[])
    return {changeTheme, mode}
   }
}