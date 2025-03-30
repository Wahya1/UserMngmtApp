import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/component";
import NotFound from "./components/NotFound/component";
import UserDetails from "./pages/User";
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
