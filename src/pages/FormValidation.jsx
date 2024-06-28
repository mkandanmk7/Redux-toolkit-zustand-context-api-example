import React, { useState } from 'react'

const FormValidation = () => {
    const [state,setState]=useState({
        name:"",
        email:"fewafew",
        password:"",
    });
    const handleStateUpdate = (field,value) => {
        let data={...state};
        data[field]=value;
        return data;

    }
    
    const [error,setError]=useState({})
    let fields = [
        {
            name: "name",
            placeholder: "Enter name",
            label: "Name",
            type:"text",
        },
        {
            name: "password",
            placeholder: "Enter Password",
            label: "Password",
            type:"password",
        },
        {
            name: "email",
            placeholder: "Enter email",
            label: "Email",
            type:"gmail",
        },
    ]
    const handleChange = (e) => {
      let {value,name}=e.target;
      if(value.length==0){
        setError({...error,
            [name]:"Should now be empty"
        })
      }
     else if(value.lenth>10){
        setError((prev)=>({
            ...prev,
            [name]:"Should not be greater than 10"
        }))
      }
      switch(name){
        case "name":{

            setState(handleStateUpdate(name,value));
            break;
        }
        case "password":{
            setState(handleStateUpdate(name,value));
            break;
        }
        case "email":{
            setState(handleStateUpdate(name,value));
            break;
        }
        default:
            return ;
      }
    }
    const handleSubmit = () => {
      console.log("Sb:",state)
    }
    
    console.log(error)
    return (
        <div className='p-5 border border-blue-300 flex flex-col items-center'>
            <p>Form validation</p>
            <div className="flex flex-col gap-2">
                {fields.map((field) => {
                    return <div key={field.name} className='flex flex-col gap-2 '>
                        <p>{field.label}</p>
                        <input placeholder={field.placeholder} className='border border-green-400 p-2 rounded' name={field.name} type={field.type} value={state[field.name]} onChange={handleChange} />
                    </div>
                })}
            </div>
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default FormValidation
