import {createContext} from "react"

function cap(){}

export const AuthContext = createContext({
    token: null,
    userId: null,
    email: null,
    login: cap,
    logout: cap,
    isAuthenticated: false
})

