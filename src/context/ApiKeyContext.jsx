import React, { useState } from 'react';

const ApiKeyContext = React.createContext({
    apiKey: '',
    setApiKey: () => {}
})
export default ApiKeyContext

export const ApiKeyContextProvider = (props) => {
    const [apiKey, setApiKey] = useState('RGAPI-c7c6cd12-31a6-4b9b-842a-4ee906a485e0')

    return (
        <ApiKeyContext.Provider value={{apiKey:apiKey, setApiKey:setApiKey}}>
            {props.children}
        </ApiKeyContext.Provider>
    )
}

