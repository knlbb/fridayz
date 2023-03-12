import './App.css';
import Login from './components/Main';
import Preloader from './components/Preloader';
import bgBlurry from "./assets/images/bgBlurry.jpg"
import Main from './components/Main.js'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';


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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


{/* <div className="App">
        <div className='App-header' style={{ backgroundImage: "url(" + bgBlurry + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
          <Preloader/>
        </div>
      </div> */}