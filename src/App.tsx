import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Submit from "./pages/Submit";
import Problems from "./pages/Problems";
import Submissions from "./pages/Submissions";
import SubmissionDetail from "./pages/SubmissionDetail";
import Friends from "./pages/Friends";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/users/:handle" element={<Profile/>}/>
          <Route path="/users/:handle/friends" element={<Friends/>}/>
          <Route path="/users/:handle/submissions" element={<Submissions/>}/>
          <Route path="/submissions/:id" element={<SubmissionDetail/>}/>
          <Route path="/submit" element={<Submit/>}/>
          <Route path="/problems" element={<Problems/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
