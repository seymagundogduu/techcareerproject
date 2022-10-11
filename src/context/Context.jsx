import { createContext, useState } from "react";

export const Context = createContext(null);

export const ContextProvider = ({children}) => {
    const [context, setContext] = useState([]);

    return <Context.Provider value={{context,setContext}}>{children}</Context.Provider>
}