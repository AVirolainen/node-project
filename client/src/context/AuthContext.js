import {createContext} from "react"

function cap(){}

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: cap,
    logout: cap,
    isAunthenticated: false
})

