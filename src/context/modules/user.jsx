import React, { createContext, useState } from "react";

// create context
export const UserContext = createContext();

// create provider
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "abioz@gmail.com",
        phone: "08012345678",
        address: "No 1, Abioz Street, Lagos",
        isAdmin: true,
    });    
    // return provider
    return (
        <UserContext.Provider value={{ user, setUser }}>
        {children}
        </UserContext.Provider>
    );
    }