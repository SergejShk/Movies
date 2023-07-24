import { createBrowserRouter } from "react-router-dom";

import SharedLayout from "../common/layouts/SharedLayout";
import MovieDetails from "../common/MovieDetails";

import Home from "../home/Home";
import Movies from "../movies/Movies";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayout />,
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
        }
      ],
    },
  ]);