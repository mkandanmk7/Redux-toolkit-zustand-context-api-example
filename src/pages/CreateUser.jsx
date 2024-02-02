import React, { useEffect, useState } from 'react'
import { Axios } from '../utils/axios'
import { useParams } from 'react-router-dom'
import { useSampleContext } from '../context/SampleContext'

const CreateUser = () => {
    const sampleContext=useSampleContext();
    console.log(sampleContext.globalState)

    
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })
    let { userId } = useParams();
    const handleAddUser = async () => {
        try {
            await Axios.post("/users", user);
        } catch (error) {
            console.log(error.message)
        }
    }

    let fields = [{
        title: "Name",
        type: "text",
        field: "name",
        placeholder: "Enter name",
    },
    {
        title: "Email",
        field: "email",
        type: "email",
        placeholder: "Enter Email",
    },
    {
        title: "Password",
        field: "password",
        type: "password",
        placeholder: "Enter password",
    },
    ]
    const getUserData = async (id) => {
        try {
            let res = await Axios.get(`/users/${id}`);
            setUser({
                name: res.data.data.name,
                email: res.data.data.email,
            })
            console.log(res)
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleUpdateUser =async () => {
      try {
        await Axios.put(`/users/${userId}`,user)
      } catch (error) {
        
      }
    }
    


    useEffect(() => {
        if (userId) {
            getUserData(userId)
        }
    }, [])
    return (
        <div className='flex-center p-5'>
            <div className='flex flex-col gap-2 w-1/2 border border-gray-400 rounded-sm p-5'>
                {fields.map((field) => {
                    return <div className='flex flex-col gap-2'>
                        <p>{field.title}</p>
                        <input className={`border border-gray-300 rounded p-2 focus:outline-green-300 transition-all ease`} type={field.type}
                            placeholder={field.placeholder}
                            value={user[field.field]}
                            onChange={(e) => {
                                let data = { ...user };
                                data[field.field] = e.target.value;
                                setUser(data);
                            }} />
                    </div>
                })}
                <button onClick={userId ? handleUpdateUser : handleAddUser} className="px-3 py-2 flex-center rounded text-white bg-green-600 hover:bg-green-800 transition">
                    {userId ? "Update user" : "Add user"}
                </button>
                <button 
                 className="px-3 py-2 flex-center rounded text-white bg-red-600 hover:bg-red-800 transition"
                onClick={()=>sampleContext.login({name:"muthu"})}>
                    update global state
                </button>

            </div>
        </div>
    )
}

export default CreateUser
