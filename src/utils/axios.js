import axios from "axios";
let baseURL= "http://localhost:9000/api/v1"

export const Axios = axios.create({
        baseURL,
        headers:{
            "Content-Type":"application/json"
        }
    })

