import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";

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
  ]);
  
  export default router;