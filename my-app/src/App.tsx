import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstPage from "./components/firstPage";
import SecondPage from "./components/secondpage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
