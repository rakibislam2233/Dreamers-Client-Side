
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "../Shared/Button";
import useSingleCollege from "../../Hook/useSingleCollege";
import { useContext } from "react";
import { UserContext } from "../../Provider/AuthProvider";

const AdmissionProcess = () => {
    const {id} = useParams()
    const {user} = useContext(UserContext)
    console.log(user);
    const [singleData] = useSingleCollege({id:id})
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      const image = data.image[0];
      const formData = new FormData();
      formData.append("image", image);
  
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_KEY
      }`;
      axios.post(url,formData)
        .then((res) => {
          const photoURL = res.data.data.display_url;
          const {name,subject,email,number,address,birth} = data;
          const {_id,college_name,college_image} = singleData;
          const admissionProcessInfo  = {
            name,subject,email,number,address,birth,photoURL,admissionCollegeId:_id,college_name,college_image
          }
         axios.post(`https://dreamslms-server-side.vercel.app/admissionDetails`,admissionProcessInfo)
         .then(res=>{
          if(res.data.insertedId){
            toast.success("Admisson successfully")
            reset()
          }
         })
         .catch(err=>{
          toast.error(err.message)
         })
        })
        .catch((error) => {
          toast.error(error.message);
        })
          
    };
    return (
        <div className="flex justify-center items-center pt-32 p-5">
        <div className="w-full max-w-6xl p-3 rounded-2xl sm:p-10 bg-gray-100 text-gray-900">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="space-y-4">
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 font-semibold ">
                Candidate Name
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  readOnly
                  placeholder="Enter Candidate Name"
                  {...register("name", { required: true })}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.name && (
                  <span className="text-rose-500">Please enter name</span>
                )}
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="font-semibold">Subject</span>
                </label>
                <select
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  {...register("subject", { required: true })}
                >
                  <option value="Bangla">Bangla</option>
                  <option value="English">English</option>
                  <option value="Math">Math</option>
                  <option value="Food">Food</option>
                  <option value="Food">Food</option>
                  <option value="CSE">CSE</option>
                  <option value="EEE">EEE</option>
                </select>
                {errors.subject && (
                  <span className="text-rose-500">Please enter email</span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 font-semibold ">
                Candidate Email
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  {...register("email", { required: true })}
                  placeholder="Enter Candidate Email"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.email && (
                  <span className="text-rose-500">Please enter email</span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="number" className="block mb-2 font-semibold ">
                  Phone Number
                </label>
                <input
                  type="number"
                  placeholder="01********"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  {...register("number", {
                    required: true,
                  })}
                />
                {errors.password && (
                  <span className="text-rose-500">
                    Please enter number
                  </span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="address" className="block mb-2 font-semibold ">
                Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Candidate Address"
                  {...register("address", { required: true })}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.address && (
                  <span className="text-rose-500">Please enter address</span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="birth" className="block mb-2 font-semibold ">
                Date of Birth
                </label>
                <input
                  type="date"
                  placeholder="Enter Candidate date of birth"
                  {...register("birth", { required: true })}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.birth && (
                  <span className="text-rose-500">Please enter date of birth</span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="image" className="block mb-2 font-semibold ">
                  Your Photo:
                </label>
                <input
                  type="file"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  {...register("image", {
                    required: true,
                  })}
                />
                <br />
                {errors.image?.type === "required" && (
                  <span className="text-rose-500">Please enter photo</span>
                )}
              </div>
            </div>
            <div className="py-3 flex justify-center">
             <Button>Submit</Button>
            </div>
          </form>
        </div>
        <Toaster></Toaster>
      </div>
    );
};

export default AdmissionProcess;