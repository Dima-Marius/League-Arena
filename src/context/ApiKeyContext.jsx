import React, { useState } from 'react';

const ApiKeyContext = React.createContext({
    apiKey: '',
    setApiKey: () => {}
})
export default ApiKeyContext

export const ApiKeyContextProvider = (props) => {
    const [apiKey, setApiKey] = useState('RGAPI-88aa59b8-32e8-47e8-acf2-e54e1e2890dd')

    return (
        <ApiKeyContext.Provider value={{apiKey:apiKey, setApiKey:setApiKey}}>
            {props.children}
        </ApiKeyContext.Provider>
    )
}

