import React,{useContext,createContext} from 'react'

import {NewContext} from "./sin"

export const About = () => {
    const value=useContext(NewContext)
    return (
        <div>
            <h1  >name:{value.name}</h1>
        </div>
    )
}
