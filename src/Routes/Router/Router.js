import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Profile from "../../Other/Profile/Profile";
import TermsAndCondition from "../../Other/TermsAndCondition/TermsAndCondition";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Registration from "../../Pages/Login/Registration/Registration";
import News from "../../Pages/News/News";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import Footer from "../../Pages/Shared/Footer/Footer";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/terms",
        element: <TermsAndCondition></TermsAndCondition>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      { path: "footer", element: <Footer></Footer> },
      { path: "*", element: <PageNotFound></PageNotFound> },
    ],
  },
]);
export default router;
