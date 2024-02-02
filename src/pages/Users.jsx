import { useEffect, useState } from "react";
import { Axios } from "../utils/axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    
    const navigate=useNavigate();
    const getUsers = async () => {
        try {
            let res = await Axios.get("/users");
            setUsers(res.data.data);
            console.log(res)
        } catch (error) {
            console.log(error.message)
        }
    }    
    const handleDeleteUser = async(id) => {
      try {
        await Axios.delete(`/users/${id}`);
        getUsers();
      } catch (error) {
        console.log(error.message) 
      }
    }
    

    useEffect(() => {
        getUsers();
    }, [])

    return <div className="text-3xl text-black">
        <div className="flex-between">
            <p>User List</p>
            <button onClick={()=>navigate("/users/add")} className="px-3 py-2 flex-center rounded text-white bg-green-600 hover:bg-green-800 transition">
                Add New User
            </button>
        </div>
        <table className="border-collapse w-full">
            <thead>
                <tr className="border-b-2 ">
                    <td>Name</td>
                    <td>Email</td>
                    <td className="flex-center">Actions</td>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return <tr key={user._id} className="border-b-2 p-2">
                        <td className="text-xl">{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <div className="flex-center gap-2">
                                <span onClick={()=>handleDeleteUser(user._id)} className="p-2 bg-red-500 rounded-sm">Delete</span>
                                <span onClick={()=>{
                                    navigate(`/users/${user._id}`)
                                }} className="p-2 bg-green-500 rounded-sm">Edit</span>
                            </div>
                        </td>
                    </tr>
                })}

            </tbody>
        </table>
    </div>
}
export default Users;