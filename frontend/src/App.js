
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './ui-components/Login';
import Signup from './ui-components/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
