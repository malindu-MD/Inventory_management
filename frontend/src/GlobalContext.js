const { createContext, useState, useContext } = require("react");

const GlobalContext=createContext();

function GlobalProvider({children}){
    const [user,setUser]=useState(null);
    return <GlobalContext.Provider value={{user,setUser}}>{children}</GlobalContext.Provider>;
}
export default GlobalProvider;

export function useGlobal(){
    return useContext(GlobalContext);
}