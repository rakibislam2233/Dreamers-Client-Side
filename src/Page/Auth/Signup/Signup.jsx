import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { Toaster, toast } from "react-hot-toast";
import { UserContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const { createNewUser, googleLogin, loading } = useContext(UserContext);
  console.log(loading);
  const naviget = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //imagebb website photo Upload
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        const { name, email, password } = data;
        createNewUser(email, password)
          .then((result) => {
            const user = result.user;
            updateProfile(user, {
              displayName: name,
              photoURL: imageUrl,
            });
            const userInfo = { name, email, imageUrl, password };
            axios
              .put(`https://dreamslms-server-side.vercel.app/users/${email}`, userInfo)
              .then((res) => {
                console.log(res.data);
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Create New User Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
                naviget("/login");
              })
              .catch((err) => {
                toast.error(err.message);
              });
          })
          .catch((err) => {
            err.message;
            toast.error(err.message);
          });
      });
  };
  const LoginWithGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user.displayName,
          email: user?.email,
          imageUrl: user.photoURL,
        };
        fetch(`https://dreamslms-server-side.vercel.app/users/${user?.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Login Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            reset();
            naviget("/");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        err.message;
        toast.error(err.message);
      });
  };
  return (
    <>
      <div className="flex justify-center items-center pt-32 p-5">
        <div className="w-full max-w-[500px] p-3 rounded-2xl sm:p-10 bg-gray-100 text-gray-900">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="space-y-4">
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.name && (
                  <span className="text-rose-500">Please enter your name</span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.email && (
                  <span className="text-rose-500">Please enter your email</span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  {...register("password", {
                    required: true,
                  })}
                />
                {errors.password && (
                  <span className="text-rose-500">
                    Please enter your password
                  </span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="image" className="block mb-2 text-sm">
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
                  <span className="text-rose-500">Please enter your photo</span>
                )}
              </div>
            </div>
            <div className="py-3">
              <button
                type="submit"
                className="bg-green-500 w-full py-3 text-white rounded-full"
              >
                Continue
              </button>
            </div>
          </form>
          <div>
            <div className="flex items-center py-2">
              <div className="w-full h-[1px]  bg-gray-500"></div>
              <div className="mx-3">Or</div>
              <div className="w-full h-[1px] bg-gray-500"></div>
            </div>
            <div className="flex gap-8 justify-center pb-2">
              <div onClick={LoginWithGoogle} className="cursor-pointer">
                <FcGoogle size={32} />
              </div>
              <div
                // onClick={LoginWithGoogle}
                className="cursor-pointer"
              >
                <BsGithub size={28} />
              </div>
            </div>
          </div>
          <p className="px-6 text-[16px] text-center text-gray-400">
            Already have an account?
            <Link
              to="/login"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
      <Toaster></Toaster>
    </>
  );
};

export default Signup;
