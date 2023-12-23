import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) =>{
    const valor1 = 'hola'
    const [ login,setLogin ] = useState(true)
    return(
        <AppContext.Provider 
            value={{
                valor1,
                login,setLogin
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}