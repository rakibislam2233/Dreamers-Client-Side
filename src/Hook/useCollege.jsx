import axios from "axios";
import { useState } from "react";


const useCollege = () => {
    const [colleges,setColleges] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    useState(()=>{
        axios.get(`https://dreamslms-server-side.vercel.app/colleges`)
        .then(res=>{
            setColleges(res.data)
            setIsLoading(false)
        })
    },[])
    return[colleges,isLoading]
};

export default useCollege;