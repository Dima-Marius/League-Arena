import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
    auth: '',
    setAuth: () => {}
})
export default AuthContext

export const AuthContextProvider = (props) => {
    const [auth, setAuth] = useState(JSON.parse(window.localStorage.getItem('auth')) || {})
    useEffect(() => {
        window.localStorage.setItem('auth', JSON.stringify(auth))
    },[auth])

    return (
        <AuthContext.Provider value={{auth:auth, setAuth:setAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

