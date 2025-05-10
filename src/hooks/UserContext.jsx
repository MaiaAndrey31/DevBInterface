import { useContext, useState, useEffect, createContext } from 'react'


const UserContext =createContext({})


export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({})


    const putUserData = (userInfo) => {
        setUserInfo(userInfo)

        localStorage.setItem('monsterburguer: userData', JSON.stringify(userInfo))
    }

    const logout = () => {
        setUserInfo({})
        localStorage.removeItem('monsterburguer: userData')
    }

    useEffect(() => {
        const storedData = localStorage.getItem('monsterburguer: userData')
        if (storedData) {
            setUserInfo(JSON.parse(storedData))

        }
    }, [])

    return (
        <UserContext.Provider value={{userInfo, putUserData, logout}}>{children}</UserContext.Provider>
    )
}

export const useUser = () =>{
    const context = useContext(UserContext)

    if(!context){
        throw new Error("useUser must be used within a UserProvider")
    }

    return context
}