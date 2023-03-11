import './App.css';
import Login from './components/Login';
import Preloader from './components/Preloader';
import bgBlurry from "./assets/images/bgBlurry.jpg"


function App() {
  return (
    <div className="App">
      <div className='App-header' style={{ backgroundImage: "url(" + bgBlurry + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <Preloader/>
      </div>
      {/* <Login/> */}
    </div>
  );
}

export default App;
