import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
