import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import "./index.css";


import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import Countries from './pages/Countries/Countries.jsx'
import CountryDetails from './pages/CountryDetails/CountryDetails.jsx'
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
       {
        path: "/countries",
        element: <Countries />,
      },
       {
        path:"/countries/:code",
        element: <CountryDetails />,
      },
    ],
  },
],
{basename: "/search-countries",}
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
