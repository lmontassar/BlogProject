import "./App.css";
import { ContextProvider } from "./components/AuthProvider";
import Footer from "./components/footer";
import Login from "./components/login";
import Main from "./components/main";
import Navbar from "./components/navbar";
import SignUp from "./components/signUp";
import Welcome from "./components/welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Welcome /><Main /></>}>
          </Route>
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
        </Routes>
        <Footer />
      </ContextProvider>
    </Router>
  );
}

export default App;
