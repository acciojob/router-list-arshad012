
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from "../AllRoutes/Routes";
import './../styles/App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
