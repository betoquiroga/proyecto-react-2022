import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {

  const [ usuario, setUsuario ] = useState({})
  useEffect(() => {
    setUsuario({
      name: "Beto Quiroga",
      registered: "15/Agosto/2022"
    })
  }, [])

  return (
    <UserContext.Provider value={usuario} >
      { children }
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }