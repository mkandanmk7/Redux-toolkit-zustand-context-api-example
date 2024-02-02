import React, { useState } from 'react'
import { useUserState } from '../zustand';

const ChildComponent = ({getDataFromChild}) => {
    const [name,setName]=useState("");
    const {user,setUser}=useUserState();
    console.log(user)
  return (
    <div>
      Child component
      <p>Name : {user.name}</p>
      <button onClick={()=>setUser({name:"mythu"})}>changed user name</button>
     <div className='border p-2'>
        <p>Name:</p>
        <input 
        className='border p-2'
        type="text" 
        placeholder='Enter name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <button 
        onClick={()=>{
            getDataFromChild(name)
        }}
        >
            Submit
        </button>
     </div>
    </div>
  )
}

export default ChildComponent
