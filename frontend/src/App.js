import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import Test from "./pages/Test";
import ResultsB from "./pages/ResultsB";
import ResultsH from "./pages/ResultsH";
import ResultsS from "./pages/ResultsS";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/results/b" element={<ResultsB />} />
        <Route path="/results/h" element={<ResultsH />} />
        <Route path="/results/s" element={<ResultsS />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
