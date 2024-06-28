import React, { useState } from 'react'
import ComponentB from './ComponentB'

const CompoentA = () => {
    const [data,setData]=useState("")
    
    const getNameFromChild = (name) => {
      console.log("parent ",name)
      setData(name)
    }

    console.log("in component a")
    

    return (
        <div>
          <h3>  Component A </h3>
          <p>Value from Child : {data}</p>

        
            <ComponentB callBack={getNameFromChild}/>
        </div>
    )
}

export default CompoentA
