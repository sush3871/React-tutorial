import { useState } from "react";

const Formhandling = ()=>{
    const [name, setName] = useState('')

    const formclick = (e) =>{
        setName(e.target.value)
    }

    const onsubmit = (e) =>{
        e.preventDefault()
        alert("Form Submitted")
    }

    return ( 

        <div>
            <form onSubmit={onsubmit}>
                <input type="text" name={name} onChange={formclick} placeholder="enter name" />
                <button type="submit">Submit </button>
            </form>
        </div>
    )

    
}

export default Formhandling