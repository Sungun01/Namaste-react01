import React, { lazy, Suspense, useEffect, useState }from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider  } from "react-redux";
import appStore from "./utils/appStore";


const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => { 
  const [ userName, setUserName ] = useState();

  useEffect (() => {
    // Make an api call
    const data = {
      name: "Gurunath R M",
    };
    setUserName(data.name);
  }, []);

  
  return  (
    <Provider store = {appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet /> 
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([ 
  {
    path: "/",
    element: < AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },

      {
        path: "/about",
        element: < About />,
      },
      {
        path: "/contact",
        element: < Contact />,
      },
      {
        path: "/cart",
        element: < Cart />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={ <h1> Loading...</h1> }>
          < Grocery />
          </Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: < RestaurantMenu />,
      },
    ],
    errorElement: < Error />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( < RouterProvider router={appRouter} />);