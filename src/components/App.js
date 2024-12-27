
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from "../AllRoutes/Routes";
import Navigation from "../Navigation/Navigation";
import './../styles/App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <AllRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
