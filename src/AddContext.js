import { createContext, useState } from "react";

let AddContext = createContext();

export function AddProvider ({children}){
    const [cart,setCart]=useState([]);
   
    return(
        <AddContext.Provider value={{setCart,cart}}>{children}</AddContext.Provider>
    )
};
export default AddContext;