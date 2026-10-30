// * React Router Data Mode installation from React Router official documentation (only green highlighted mode)
import { createBrowserRouter, Navigate } from "react-router";


import { Books } from "../pages/Books";
import { Customers } from "../pages/Customers";
import { Authors } from "../pages/Authors";
import { Loans } from "../pages/Loans";
import { App } from "../App";

export const router = createBrowserRouter([
    // * Objects passed to createBrowserRouter are called "Route Objects" (official doc)
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Books />,
            },
            {
                path: "books",
                element: <Books />,
                children: [{
                    path: ":id",
                    element: <Books />,
                }]
            },
            {
                path: "customers",
                element: <Customers />,
                children: [
                    {
                        path: ":id",
                        element: <Customers />,
                    },
                ]
            },
            {
                path: "authors",
                element: <Authors />,
                children: [
                    {
                        path: ":id",
                        element: <Authors />,
                    },
                ]
            },
            {
                path: "loans",
                element: <Loans />,
                children: [
                    {
                        path: ":id",
                        element: <Loans />,
                    },
                ]
            },
            {
                path: "*",
                element: <Navigate to="/books" />,
            },

        ]
    },

]);

