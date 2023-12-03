import React from 'react'
import React, { createContext, useContext } from 'react';

const Idofthestudentdash = () => {
    const MyContext = createContext();
    const sharedData = 'Hello from Context!';
    return (
        <div>
            <MyContext.Provider value={sharedData}>
                {children}
            </MyContext.Provider>
        </div>
    )
}

export default Idofthestudentdash
