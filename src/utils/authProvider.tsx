import {useState, createContext} from 'react'

export const AuthContext =  createContext;

const AuthProvider = ({ children })=>{
    const [logedIn, setLoggedIn] = useState(false)
    const [userDetail, setUserDetail] = useState({})

    return (
        <p></p>
    )

}

export default AuthProvider
