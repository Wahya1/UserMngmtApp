import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/component";
import NotFound from "./pages/NotFound/component";
import UserDetails from "./pages/Details";
import UserUpdate from "./pages/Update";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

function Layouts() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/users/update/:id" element={<UserUpdate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Layouts;
