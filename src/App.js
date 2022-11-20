import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import './reset.css'
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/test' element={<Navbar/>}/>
      </Routes>
    </div>
  );
}

export default App;
