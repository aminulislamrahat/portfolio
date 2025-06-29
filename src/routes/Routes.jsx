import { createBrowserRouter } from "react-router";

import { Root } from "../layouts/Root";
import { Home } from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";

export const Routes = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/project/:id",
                element: <p></p>
            }


        ],
    },
    {
        path: "/*",
        Component: NotFoundPage
    }
]);