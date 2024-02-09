import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";

import './index.css'
import Index from './pages/Index.tsx';
import MovieList from './pages/MovieList.tsx';

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Index />,
            },
            {
                path: "/baza",
                element: <MovieList />,
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
