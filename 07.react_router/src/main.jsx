import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import User from "./Components/User/User";
import Github, { githubInfoLoader }  from "./Components/Github/Github";


//////1st TARIKA FOR ROUTING
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element: <Home />,
//       },
//       {
//         path:"/About",
//         element: <About />,
//       },
//       {
//         path:"/Contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

///2nd  TARIKA FOR ROUTIG
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Contact" element={<Contact/>}/>
    <Route path="User/:id" element={<User/>}/>
    <Route 
    path="Github" 
    element={<Github/>}
    loader={githubInfoLoader}
    />
  </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App/>
  </React.StrictMode>
);
