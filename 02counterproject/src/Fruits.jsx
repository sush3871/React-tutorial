import React from "react";

const Fruits = () =>{
    const fruitsuit = ['apple', 'banana', 'mango']

    return (

        <div>
            <ul>

            {fruitsuit.map((f, index) => (
                <li key={index}> {f}</li>
            ))}
            </ul>
        </div>
    )
}

export default Fruits