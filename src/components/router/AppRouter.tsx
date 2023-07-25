import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const SharedLayout = lazy(() => import("../common/layouts/SharedLayout"));
const ErrorPage = lazy(() => import("../common/ErrorPage"));
const MovieDetails = lazy(() => import("../common/MovieDetails"));

const Home = lazy(() => import("../home/Home"));
const Movies = lazy(() => import("../movies/Movies"));
const Cast = lazy(() => import("../common/Cast"));
const Reviews = lazy(() => import("../common/Reviews"));

export const router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
            path: "/movies/:movieId",
            element: <MovieDetails />,
            children: [
              {
                path: "/movies/:movieId/cast",
                element: <Cast />
              },
              {
                path: "/movies/:movieId/reviews",
                element: <Reviews />
              }
            ]
        }
      ],
    },
  ]);