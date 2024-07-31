import React from "react";
import Cats from "./components/Cats";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catnimg from "./pages/Catnimg";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Cats />}></Route>
        <Route path="/img" element={<Catnimg/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
