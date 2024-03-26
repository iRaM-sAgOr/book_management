'use client'

import { StoreContext } from "../context";
import { useState } from "react";

export const StoreProvider = ({ children }) => {
    const [cartData, setCardData] = useState([]);

    return (
        <StoreContext.Provider value={{ cartData, setCardData }}>
            {children}
        </StoreContext.Provider>
    )
}