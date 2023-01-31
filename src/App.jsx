import React from "react";
import { Routes, Route } from "react-router-dom";
import Mainlayout from "./components/Mainlayout/Mainlayout";
import NotFoundBlock from "./components/NotFoundBlock/NotFoundBlock";
import About from "./page/About";
 
import Home from "./page/Home";

const App = () => {
  

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/currensy" element={<Mainlayout/>}>
        <Route path="/currensy" element={<Home />} />
        <Route path="currensy/about" element={<About/>} />
      </Route>
      <Route path="*" element={<NotFoundBlock />} />
    </Routes>
  </React.Suspense>
  )
}

export default App