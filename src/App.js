import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Route';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import SingleModalProduct from './pages/SingleProduct/SingleModalProduct';
import Header from './shered/Header';



function App() {


  return (
    <>
     <RouterProvider router={router}></RouterProvider>
     <Toaster />

    </>
    
  );
}

export default App;
