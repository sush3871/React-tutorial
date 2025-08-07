import { useState } from "react";

const UserInputs = () =>{

    const [value, setValue] = useState('su')

    const changedvalue = (e)=>{
        setValue(e.target.value)
    }

    return (
        <input type="text" value={value} onChange={changedvalue} />
    )

}

export default UserInputs