import React from "react";

function Car(props) {
    return <li>I am a {props.brand}</li>
}

const Garage = () =>{
    const cars = ["audy" , 'bmw' , 'ford']

    return(

        <div>
            <ul>
                {cars.map((car) =>(
                    <Car brand= {car} />
                ))}
            </ul>
        </div>
    )
    
}

export default Garage