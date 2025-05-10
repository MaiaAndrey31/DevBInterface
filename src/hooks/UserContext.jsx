import { useContext, useState, useEffect, createContext } from 'react'


const UserContext =createContext({})


export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({id: 1, name: "Andrey"})

    return (
        <UserContext.Provider value={{userInfo}}>{children}</UserContext.Provider>
    )
}

export const useUser = () =>{
    const context = useContext(UserContext)

    if(!context){
        throw new Error("useUser must be used within a UserProvider")
    }

    return context
}