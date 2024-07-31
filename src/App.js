import React from "react";
import Cats from "./components/Cats";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Catnimg from "./pages/Catnimg";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Cats />}></Route>
        <Route path="/img" element={<Catnimg/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
