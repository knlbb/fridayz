import './App.css';
import Main from './components/Main.js'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import About from './components/About';
import Events from './components/Events';
import Mission from './components/Mission';
import Support from './components/Support';
import NonExist from './components/NonExist';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      {/* <div className='App-header' style={{ backgroundImage: "url(" + bgBlurry + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <Preloader/>
      </div> */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/mission" element={<Mission/>} />
            <Route path="/support" element={<Support/>} />
            <Route path="/*" element={<NonExist/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;