import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
//import logo from "../public/images/logo.png";
import Header from "./components/Header.js";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/ReastaurantMenu.js";
import '../index.css';
import UserContext from "./utils/Hooks/UserContext.js";

//AppLayout component was the major or parent component in whcih all other components exits
const AppLayout =()=>{

  const [userName, setUserName] = useState();

  //authentications

  useEffect(()=>{
    //Make an API call and send username and password
    const data = {
      name : "Setty Ruthvik",
    }
    setUserName(data.name);
  },[]);

    return(
      <UserContext.Provider value={{loggedInUser: userName, setUserName}} // So we can use loggedInUser and setUserName evry where in the App now 
> 
        <div className="app">
          <Header>
            <Outlet />
          </Header>
        </div>
      </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",      // It means we are in url path "/" open AppLayout
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu />
      }  
    ],
    errorElement: <Error />,
  },
]);


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
/* Intialy we use to render AppLayout as the main page and show the AppLayout component as default
root.render(<AppLayout />);
But now we will us appRouter, So that we can navigate esaily to all paths which we give that by not 
taking AppLayout as the first page
*/



  