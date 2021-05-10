import {useState, createContext} from 'react'

export const AuthContext =  createContext;

const AuthProvider = ({ children })=>{
    const [logedIn, setLoggedIn] = useState(false)
    const [userDetail, setUserDetail] = useState({})

    return (
    )

}

export default AuthProvider
