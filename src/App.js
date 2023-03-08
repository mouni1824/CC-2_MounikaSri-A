
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import DisplayData from './Components/DisplayData';
import Post from './Components/Post';
import Update from './Components/Update';
import './App.css'
function App() {
  return (
    <div>
    <center>
    <DisplayData/></center>
    <br></br><br></br>
    <div className='addup'>
    <Post/>
    <Update/>
    </div>
    </div>
    
  );
}

export default App;
