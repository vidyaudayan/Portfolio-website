import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './routes/root.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Service from './Pages/Service.jsx';
import Skill from './Pages/Skill.jsx';
import Contact from './Pages/Contact.jsx';
import Projects from './Pages/Projects.jsx';
import PdfViewer from './components/PdfViewer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/view-resume",
        element: <PdfViewer/>,
      },
      {
        path: "/service",
        element: <Service/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/skill",
        element: <Skill/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
