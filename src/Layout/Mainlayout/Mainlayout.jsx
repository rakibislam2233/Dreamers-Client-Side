import { Outlet } from "react-router-dom";
import Navbar from "../../Page/Shared/Navbar/Navbar";


const Mainlayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default Mainlayout;