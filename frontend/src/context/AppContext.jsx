/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) =>{
    const valor1 = 'hola'
    const [ login,setLogin ] = useState(true)

    //Tareas de los viñedos
    const [ tareas,setTareas ] = useState([])

    //Lista de viñedos
    const [ viniedos,setViniedos ] = useState([])

    //Lista de cultivos
    const [ cultivos,setCultivos ] = useState([])

    const axiosConfig = {withCredentials: true}

    return(
        <AppContext.Provider 
            value={{
                valor1,
                login,setLogin,
                tareas,setTareas,
                axiosConfig,
                viniedos,setViniedos,
                cultivos,setCultivos
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}