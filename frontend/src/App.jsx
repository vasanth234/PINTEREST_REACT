import logo from './logo.svg';
import './App.css';
import Leftbar from  './components/leftbar/leftbar'
import Gallery from './components/Gallery/Gallery'
import  Topbar from './components/topbar/topbar'

function App() {
  return (
    <div className="App">
     <Leftbar/>
     <div className="content">
      <Topbar/>
      <Gallery/>

     </div>
    </div>
  );
}

export default App;
