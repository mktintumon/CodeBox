import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Loader from "./components/Loader";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
