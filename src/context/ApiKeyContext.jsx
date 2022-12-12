import React, { useState } from 'react';

const ApiKeyContext = React.createContext({
    apiKey: '',
    setApiKey: () => {}
})
export default ApiKeyContext

export const ApiKeyContextProvider = (props) => {
    const [apiKey, setApiKey] = useState('RGAPI-3dea2e41-97ff-4bbe-b5f2-f3c8b50f8c13')

    return (
        <ApiKeyContext.Provider value={{apiKey:apiKey, setApiKey:setApiKey}}>
            {props.children}
        </ApiKeyContext.Provider>
    )
}

