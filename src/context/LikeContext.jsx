import React, { useState } from 'react';

const LikeContext = React.createContext({
    like: false,
    setLike: () => {}
})
export default LikeContext

export const LikeContextProvider = (props) => {
    const [like, setLike] = useState(false)

    return (
        <LikeContext.Provider value={{like:like, setLike:setLike}}>
            {props.children}
        </LikeContext.Provider>
    )
}

