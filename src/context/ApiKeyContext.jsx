import React, { useState } from 'react';

const ApiKeyContext = React.createContext({
    apiKey: '',
    setApiKey: () => {}
})
export default ApiKeyContext

export const ApiKeyContextProvider = (props) => {
    const [apiKey, setApiKey] = useState('RGAPI-8c90c701-1e08-4309-aa76-876f91315209')

    return (
        <ApiKeyContext.Provider value={{apiKey:apiKey, setApiKey:setApiKey}}>
            {props.children}
        </ApiKeyContext.Provider>
    )
}

