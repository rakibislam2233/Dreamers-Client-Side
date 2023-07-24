import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Home from "../Page/Home/Home";
import Colleges from "../Page/Colleges/Colleges";
import Admission from "../Page/Admission/Admission";
import MyCollege from "../Page/MyCollege/MyCollege";
import Contact from "../Page/Contact/Contact";
import Login from "../Page/Auth/Login/Login";
import Signup from "../Page/Auth/Signup/Signup";
import AdmissionProcess from "../Page/Admission/AdmissionProcess";
import CollegesDetails from "../Page/Colleges/CollegesDetails";
import Dashboardlayout from "../Layout/Dashboardlayout/Dashboardlayout";
import Blogs from "../Page/Home/Blogs/Blogs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement:<div>Error</div>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
        ,
        {
          path:'/colleges',
          element:<Colleges></Colleges>
        }
        ,
        {
          path:'/collegesDetails/:id',
          element:<CollegesDetails></CollegesDetails>
        }
        ,
        {
          path:'/admission',
          element:<Admission></Admission>
        }
        ,
        {
          path:'/admissionProcess/:id',
          element:<AdmissionProcess></AdmissionProcess>
        }
        ,
        {
          path:'/myCollege',
          element:<MyCollege></MyCollege>
        }
        ,
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        }
        ,
        {
          path:'/contact',
          element:<Contact></Contact>
        }
        ,
        {
          path:'/signup',
          element:<Signup></Signup>
        }
        ,
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboardlayout></Dashboardlayout>,
      errorElement:<div>Error</div>,
      children:[
        {
          path:'dashboard',
          element:<div>This is rakib</div>
        }
        ,
        {
          path:"editInformation",
          element:<></>
        }
      ]
    }
  ]);

export default router;