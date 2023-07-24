import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {BsBoxArrowInRight } from "react-icons/bs";
import { UserContext } from "../../../Provider/AuthProvider";
import Container from "../Container/Container";
import Button from "../Button";
// #002058
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(UserContext);
  const naviget = useNavigate();
  const logoutUser = () => {
    logOut();
    naviget("/login");
  };
  return (
    <nav className="w-full fixed h-24 z-50 bg-gradient-to-r from-[#FBE6E5] to-[#DDECFF] shadow-lg ">
      <Container>
        <div className="w-full h-24 flex justify-between items-center px-5">
          <div>
            <h3 className="text-2xl font-semibold text-[#392C7D]">Dreamers</h3>
         
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-5 font-semibold">
              <li className="hover:-translate-y-1 transition-all duration-500">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="hover:-translate-y-1 transition-all duration-500">
                <NavLink to={"/colleges"}>Colleges</NavLink>
              </li>
              <li className="hover:-translate-y-1 transition-all duration-500">
                <NavLink to={"/admission"}>Admission</NavLink>
              </li>
              <li className="hover:-translate-y-1 transition-all duration-500">
                <NavLink to={"/myCollege"}>My College</NavLink>
              </li>
              <li className="hover:-translate-y-1 transition-all duration-500">
                <NavLink to={"/blogs"}>Blogs</NavLink>
              </li>
              <li className="hover:-translate-y-1 transition-all duration-500">
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            {user ? (
              <>
                <div
                  onClick={() => setOpen(!open)}
                  className="relative flex justify-center items-center w-14 h-14 bg-slate-50 rounded-full"
                >
                  <img
                    className="w-full  h-full rounded-full cursor-pointer"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                {open && (
                  <div className="absolute  top-24  right-5 rounded-t-sm rounded-b-2xl  py-5  px-2 w-52 h-64 bg-[#DDECFF] shadow-lg space-y-3 text-gray-600">
                    <div className=" text-center space-y-3 ">
                      <img
                        src={user.photoURL}
                        className="w-16 h-16  rounded-full mx-auto"
                        alt=""
                      />
                      <h2 className="py-2">{user.displayName}</h2>
                      <Link to="dashboard">
                       <Button>View Profile</Button>
                      </Link>
                    </div>
                    <hr />
                    <button
                      onClick={() => [logoutUser(), setOpen(false)]}
                      className="border border-green-500 hover:bg-green-500 w-full py-2 px-5 rounded-xl transition-all duration-500 flex  items-center gap-2"
                    >
                      <BsBoxArrowInRight></BsBoxArrowInRight> Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="space-x-4">
                <Link to={"/login"}>
                  <Button >
                    Sign in
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
