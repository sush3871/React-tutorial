import React, {createContext} from "react";

export const CarContext = createContext();

export const CarProvider = ({children}) => {
    const car = {
        brand: "Ford",
        name: "Mustnag",
        model: 1982,
        owener: 'Sushant'
    }
    return(
        <CarContext.Provider value={car}>
            {children}
        </CarContext.Provider>
    )
}