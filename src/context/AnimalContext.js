import React from 'react'
import { createContext } from "react";
import Data from './Data'
export const AnimalContext = createContext({});
const AnimalContextProvider = ({children}) => {
  return (
    <AnimalContext.Provider value={Data}>
      {children}
    </AnimalContext.Provider>
  )
}

export default AnimalContextProvider
