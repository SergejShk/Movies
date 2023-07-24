import { createBrowserRouter } from "react-router-dom";

import SharedLayout from "../common/layouts/SharedLayout";
import ErrorPage from "../common/ErrorPage";
import MovieDetails from "../common/MovieDetails";

import Home from "../home/Home";
import Movies from "../movies/Movies";
import Cast from "../common/Cast";
import Reviews from "../common/Reviews";

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