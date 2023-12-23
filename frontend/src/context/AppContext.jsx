import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) =>{
    const valor1 = 'hola'
    return(
        <AppContext.Provider value={{valor1}}>
            {props.children}
        </AppContext.Provider>
    )
}