import Login from './Login';
import Profile from './Profile';
import {Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Login/>}> Login   </Route>  
      <Route path='/' element={<Profile/>}> Profile   </Route>
     </Routes>
    </div>
  );
}

export default App;
