import React, { useState } from 'react';

const ApiKeyContext = React.createContext({
    apiKey: '',
    setApiKey: () => {}
})
export default ApiKeyContext

export const ApiKeyContextProvider = (props) => {
    const [apiKey, setApiKey] = useState('RGAPI-22bb161b-30e5-4906-9e2f-f27e9f506f7e')

    return (
        <ApiKeyContext.Provider value={{apiKey:apiKey, setApiKey:setApiKey}}>
            {props.children}
        </ApiKeyContext.Provider>
    )
}

