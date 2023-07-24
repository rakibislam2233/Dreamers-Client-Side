import { Outlet } from "react-router-dom";
import Navbar from "../../Page/Shared/Navbar/Navbar";
import Footer from "../../Page/Shared/Footer/Footer";


const Mainlayout = () => {
    return (
        <div className="bg-gradient-to-r from-[#FBE6E5] to-[#DDECFF]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;