import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

// rotas
import Signin from './routes/Signin';
import Profile from './routes/Profile';
import Home from './routes/Home';
import Register from './routes/Register';
import NewItem from './routes/NewItem';
import PostDetails from './routes/PostDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signin />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/postDetails',
    element: <PostDetails />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/newitem',
    element: <NewItem />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
