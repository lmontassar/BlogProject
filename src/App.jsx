import "./App.css";
import { ContextProvider } from "./components/AuthProvider";
import Footer from "./components/footer";
import Login from "./components/login";
import Main from "./components/main";
import Navbar from "./components/navbar";
import SignUp from "./components/signUp";
import Welcome from "./components/welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBlog from "./components/addBlog";
import SingleBlog from "./components/singleBlog";
import ProtectedRoutes from "./components/protectedRoutes";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Welcome /><Main /></>}>
          </Route>
          <Route element={<ProtectedRoutes logged="true" />}>
            <Route path="/blog/:id" element={<SingleBlog/>}/>
            <Route path="/addblog" element={<AddBlog/>}/>
          </Route>

          <Route element={<ProtectedRoutes  />}>
            <Route path="/Login" element={<Login/>} />
            <Route path="/SignUp" element={<SignUp/>} />
          </Route>
          
        </Routes>
        <Footer />
      </ContextProvider>
    </Router>
  );
}

export default App;
