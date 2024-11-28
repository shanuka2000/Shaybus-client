import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./modules/shared/layout/base-layout";
import Welcome from "./modules/client/base";
import Login from "./modules/auth/login";
import Register from "./modules/auth/register";
import Profile from "./modules/client/dashboard/profile";
import Search from "./modules/client/dashboard/search";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          index: true,
          element: <Welcome />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Register />,
        },
        {
          path: "/client/profile",
          element: <Profile />,
        },
        {
          path: "/client/search",
          element: <Search />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
