import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ErrorPage from "./pages/errorPage";
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/app",
    Component: App,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
