
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './ui-components/Login';
import Signup from './ui-components/Signup';
import Home from './elements/Home';
import Main from './ui-components/Main';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Main child={<Home/>}/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
