import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddForm = (props) => {
    const [name, setName] = useState("");
    const [surneme, setSurneme] =  useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");

    const handleValues =  () => {
        let newObj = {
            name: name,
            surneme: surneme,
            phone: phone,
            mail: mail,
        };
        props.hendleSome(newObj);

    }
  return (
    <div>
        <input onChange={(e)=>setName(e.target.value)}  type="text" placeholder='Neme' />
        <input onChange={(e)=>setSurneme(e.target.value)} type="text" placeholder='Surneme'/>
        <input onChange={(e)=>setPhone(e.target.value)} type="text" placeholder='Phone'/>
        <input onChange={(e)=>setMail(e.target.value)} type="text" placeholder='Mail' />
       <Link to='/'> <button onClick={handleValues} >add</button></Link>
    </div>
  )
}

export default AddForm