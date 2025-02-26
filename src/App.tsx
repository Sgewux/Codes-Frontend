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
import Problemsetter from "./pages/Problemsetter";
import Problem from "./pages/Problem";
import { AuthProvider } from "./context/AuthContext";

// Markdown rendering
import 'katex/dist/katex.min.css';
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/users/:handle" element={<Profile />} />
            <Route path="/users/:handle/submissions" element={<Submissions />} />
            <Route path="/submissions/:id" element={<SubmissionDetail />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/problems/:id" element={<Problem />} />
            <Route path="/:handle/problemsetter" element={<Problemsetter />} />
            <Route path="/friends" element={<Friends />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
