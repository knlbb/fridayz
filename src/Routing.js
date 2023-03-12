import './App.css';
import Login from './components/Main';
import Preloader from './components/Preloader';
import bgBlurry from "./assets/images/bgBlurry.jpg"
import Main from './components/Main.js'
import { Route, Routes } from "react-router-dom"
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
    </>
  );
}

export default App;
