import React, { useState } from 'react'

const ComponentB = ({callBack}) => {
    const [name, setName] = useState("Muthu")
  return (
    <div>
     <h3> Child component B</h3>
    
      <button className='p-3 bg-red-400' onClick={()=>callBack(name)}>Send to parent</button>
    </div>
  )
}

export default ComponentB
