import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './provider/AuthProvider';
import Order from './components/Order';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/login',
        element: <Login></Login>,
      },
      {
        path:'/register',
        element: <Register></Register>,
      },
      
      {
        path:'/order',
        element: <PrivateRoute>
          <Order></Order>
        </PrivateRoute>,
      },
      
    ]
  }
])








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 

    <AuthProvider>
    <RouterProvider router = {router} />
    </AuthProvider>

  
  </React.StrictMode>,
)
