import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Container from "../Shared/Container/Container";

const MyCollege = () => {
    const {user} = useContext(UserContext)
    const [myAdmissionClg,setMyAdmissionClg] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/addmissionDetails/${user?.email}`)
        .then(res=>{
            setMyAdmissionClg(res.data)
        })
    },[user])
    console.log(myAdmissionClg);
    return (
        <div className="w-full max-w-7xl mx-auto pt-32 py-10 ">
            <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    myAdmissionClg.map(admission=><>
                        <div className="border  shadow-lg p-5 rounded-xl  cursor-pointer flex justify-between flex-col gap-3 text-gray-800">
                          <div className="space-y-2">
                            <div className="rounded-xl overflow-hidden">
                              <img
                                className="w-full h-52 rounded-xl hover:scale-110 duration-300 transition-all "
                                src={admission.photoURL}
                                alt=""
                              />
                            </div>
                          <h3 className="text-xl font-bold">Student Name : {admission.name}</h3>
                            <h2 className="font-bold">Admission College Name :   {admission.college_name}</h2>
                          </div>
                          <h3 className="font-semibold">Student Email : {admission.email}</h3>
                          <h3 className="font-semibold">Student Phone : {admission.number}</h3>
                          <h3 className="font-semibold">Subject : {admission.subject}</h3>
                          <h3 className="font-semibold">Date of Birth : {admission.birth}</h3>
                        </div>
                      </>)
                }
            </div>
            </Container>
        </div>
    );
};

export default MyCollege;