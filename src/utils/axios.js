// import axios from "axios";
// let baseURL= "http://localhost:9000/api/v1"

import axios from "axios";

// export const Axios = axios.create({
//         baseURL,
//         headers:{
//             "Content-Type":"application/json"
//         }
//     })



let baseURL = "http://localhost:9000/api/v1";
let token = localStorage.getItem("authtoken");
export const Axios = axios.create({
    baseURL,

    headers: {
        Authorization: `Bearer ${token}`
    }
})



export const AxiosConfig = axios.create({
    baseURL: "",
    headers: {
        Authorization: `Bearer ${token}`
    }
})