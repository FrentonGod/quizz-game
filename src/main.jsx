import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Dashboard'
import AddQuestionForm from './modules/questions';
import PlayQuestionForm from './modules/play';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },

  {
    path: "/questions",
    element: <AddQuestionForm/>
  },

  {
    path: "/play",
    element: <PlayQuestionForm/>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
