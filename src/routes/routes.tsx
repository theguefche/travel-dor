import LazyLoad from "@routes/LazyLoad";
import NonAuthenticatedRoute from "@routes/NonAuthenticatedRoute";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";


const PublicLayout = lazy(()=> import("@layout/PublicLayout"))
const Signin = lazy(() => import('@pages/signin/Signin'));
const Signup = lazy(() => import('@pages/signup/Signup'));
const LandingPage = lazy(() => import('@pages/landingPage/LandingPage'));

export const router = createBrowserRouter(
  [
    {
      element: <NonAuthenticatedRoute />,
      children: [
        {
          path: 'sign-in',
          element: <LazyLoad Component={Signin} />,
        },
        {
          path: 'sign-up',
          element: <LazyLoad Component={Signup} />,
        },
      ]
    },
    {
      path: "/",
      element: <LazyLoad Component={PublicLayout} />,
      children: [
        {
          path: '/',
          element: <LazyLoad Component={LandingPage} />,
        },
        {
          path: "/list-stay",
          element: <p>asd</p>,
        },
        {
          path: "/search",
          element: <p>asd</p>,
        }, {
          path: "/book",
          element: <p>Book</p>,
        }
      ]
    },
  ],);