import { Outlet } from "react-router-dom";
import Navbar from "../../Page/Shared/Navbar/Navbar";


const Mainlayout = () => {
    return (
        <div className="bg-gradient-to-r from-[#FBE6E5] to-[#DDECFF]">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;