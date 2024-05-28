import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  // {
  //   path: "/BecomeAMentor",
  //   element: <BecomeAMentor />,
  // },
  // {
  //   path: "/profileMentor/:id",
  //   element: <ProfileMentor />,
  // },
  // {
  //   path: "/profileMentor/edit/:id",
  //   element: <ProfileMentorEdit />,
  // },
  // {
  //   path: "/profileUser/:id",
  //   element: <ProfileUser />,
  // },
  // {
  //   path: "/profileUser/edit/:id",
  //   element: <ProfileUserEdit />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
