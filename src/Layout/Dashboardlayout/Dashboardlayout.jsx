import axios from "axios";
import { useContext } from "react";
import { AiFillCodepenCircle, AiOutlineHome, } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { UserContext } from "../../Provider/AuthProvider";
const Dashboardlayout = () => {
  const { user } = useContext(UserContext);
  return (
    <>
     
     <div className="w-full md:flex justify-between">
          <div className="w-full md:fixed md:w-[18%]  bg-gradient-to-r from-[#FBE6E5] to-[#DDECFF]">
            <nav className="w-full  md:h-screen flex flex-col  items-center gap-20 px-5 py-5 border-e-2 ">
              <div className="text-center">
                <Link>
                  <img
                    className="w-32 h-32 rounded-full cursor-pointer"
                    src={user.photoURL}
                    alt=""
                  />
                </Link>
              </div>
              <ul className="flex flex-col gap-3 font-semibold">
                <li>
                  <Link
                    to="/dashboard/adminHome"
                    className="flex gap-2 items-center hover:text-teal-500 duration-200 cursor-pointer"
                  >
                    <AiOutlineHome className="w-5 h-5"></AiOutlineHome>Admin
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/editInformation"
                    className="flex gap-2 items-center hover:text-teal-500 duration-200 cursor-pointer"
                  >
                    <AiFillCodepenCircle className="w-5 h-5"></AiFillCodepenCircle >
                    Edit Information
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button className="py-2 mt-2 px-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl flex items-center gap-1">
                      Back to home
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:ml-[18%] h-full w-full ">
            <Outlet></Outlet>
          </div>
          <Toaster></Toaster>
        </div>
    </>
  );
};

export default Dashboardlayout;
