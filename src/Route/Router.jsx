import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddClass from "../Pages/Dashboard/AddClass";
import Enrolledclass from "../Pages/Dashboard/Enrolledclass";
import ManageClass from "../Pages/Dashboard/ManageClass";
import ManageUser from "../Pages/Dashboard/ManageUser";
import MyClass from "../Pages/Dashboard/MyClass";

import Selectedclass from "../Pages/Dashboard/Selectedclass";
import Payment from "../Payment/Payment";
import AdminRoute from "../Providers/AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
  
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/instructors",
          element: <Instructors />,
          loader: ()=> fetch('http://localhost:5000/teachers')
        },
        {
          path: "/classes",
          element: <Classes />,
          loader: ()=> fetch('http://localhost:5000/allclasses')
        },
        
      ],
    },
    {
      path: 'dashboard',
      element:<PrivateRoute><Dashboard /></PrivateRoute> ,
      children:[
        {
          path: 'addclass',
          element: <AddClass />

  
        },
        {
          path: 'enrolledclass',
          element:<Enrolledclass/>
        },
        {
          path: 'manageclass',
          element: <ManageClass />,
        },
        {
          path: 'manageuser',
          element:<ManageUser/> ,
          
        },
        {
          path: 'myclass',
          element:<MyClass />
        },
        {
          path: 'payment',
          element:  <Payment />
        },
        {
          path: 'selectedclass',
          element:<Selectedclass />,
        }

      ]
      

    }
  ]);
  
  export default router;