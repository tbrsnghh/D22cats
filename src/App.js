import React from "react";
import Cats from "./components/Cats";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Cats />}></Route>
        
      </Routes>
    </HashRouter>
  );
}

export default App;
