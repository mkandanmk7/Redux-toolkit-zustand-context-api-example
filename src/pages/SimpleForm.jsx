import React, { useEffect, useState } from 'react'
import { Axios } from '../utils/axios';

const SimpleForm = () => {
    const [state, setState] = useState({
        username: "",
        password: "",
        profile_image:"",
        email: "",
    })
    const [count,setCount]=useState(0);
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    
        email: "",
    });

    let formFields = [
        {
            name: "username",
            type: "text",
            label: "User name",
            placeholder: "enter user name here..."
        },
        {
            name: "password",
            type: "password",
            label: "Password",
            placeholder: "enter password here..."
        },
        {
            name: "profile_image",
            type: "file",
            label: "Profile",
            placeholder: "Drop an image"
        },
        {
            name: "email",
            type: "email",
            label: "Email",
            placeholder: "enter email here..."
        },
    ]
    // const handleErrors = (field, message) => {
    //     console.log("triggered")
    //     let data = { ...errors };
    //     data[field] = message;
    //     setErrors(data);
    // }

    const handleChange = (e) => {
        let { value, name} = e.target;
        if(name==="profile_image"){
            setState({...state,profile_image:e.target.files[0]})
            return ;
        }
        // switch (name) {
        //     case "username": {
        //         if (value.length < 5) handleErrors("username", "Should be greater than 5")
        //         else if (value.length > 15) handleErrors("username", "Should be less than 15")
        //         else handleErrors(name, "");
        //         break;
        //     }

        //     // default:
        //     //     return;
        // }

        let data = { ...state };
        data[name] = value;
        setState(data);   
    }

    const handleSubmit = async() => {
      let data=new FormData();

      data.append("name",state.username)
      data.append("email",state.email)
      data.append("password",state.password)
      data.append("profile_image",state.profile_image)
    
    try {
        let res=await Axios.post("/users",data);
        console.log(res.data);

    } catch (error) {
        console.log(error.message)
    } 

    }
    

    useEffect(()=>{
        console.log("form use Effect trigged")
    },[state])

    useEffect(()=>{
        console.log("count effect trigged")
    },[])

    return (
        <div className='flex flex-col gap-2 p-4'>
            <p>Count :{count}</p> <span onClick={()=>setCount(count+1)}>Inc</span>
            {formFields.map(({ name, type, label, placeholder }) => {
                return <div className='flex flex-col gap-2 '>
                    <p>{label}</p>
                    <input className='p-2 border ' name={name} type={type} placeholder={placeholder} value={state[name]} onChange={handleChange} />
                    <span className='text-red-600'>{errors[name]}</span>
                </div>
            })}
            <button onClick={()=>{
               handleSubmit()
            }} disabled={Object.values(errors).some((error)=>error.length>0)}  className={` rounded ${Object.values(errors).some((error)=>error.length>0)?"bg-gray-400":"bg-green-400"}`}>Submit</button>
        </div>
    )
}

export default SimpleForm
