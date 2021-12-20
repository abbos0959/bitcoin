import React,{createContext ,useContext} from 'react'
  export const NewContext=createContext()
const obj={name:"abbos",familiya:"G`ulomov",nomer:+998906770959}

const Sin = ({children}) => {
    return (
       <NewContext.Provider value={obj}>
           {children}
       </NewContext.Provider>
    )
}
export default Sin