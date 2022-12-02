import React, { useState } from 'react';

/* initialize here for auto-complete snippet. */
const RegisterContext = React.createContext({
    registerData: {},
    setRegisterData: () => {}
})
export default RegisterContext

export const RegisterContextProvider = (props) => {

    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        ign: '',
        region: '',
        role: '',
        rank: '',
    })
    
    return (
        <RegisterContext.Provider value={{registerData:registerData,setRegisterData:setRegisterData}}>
            {props.children}
        </RegisterContext.Provider>
    )
}






/*         {
                email: registerData.email,
                password: registerData.password,
                confirmPassword: registerData.confirmPassword,
                firstName: registerData.firstName,
                lastName: registerData.lastName,
                ign: registerData.ign,
                region: registerData.region,
                role: registerData.role,
                rank: registerData.rank,
        } */
