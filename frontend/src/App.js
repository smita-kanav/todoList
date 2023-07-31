import React, { useState } from 'react';


import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
// import AddUser from "./components/AddUser";
import Home from "./Home";

function App() {
  
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;