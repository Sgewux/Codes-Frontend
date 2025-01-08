import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Submit from "./pages/Submit";
import Problems from "./pages/Problems";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/submit" element={<Submit/>}/>
          <Route path="/problems" element={<Problems/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
