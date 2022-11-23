import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import './reset.css'
import Home from './routes/Home/Home';
import Leaderboard from './routes/Leaderboard/Leaderboard';
import Login from './routes/Login/Login';


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/battles' element={<Navbar/>}/>
          <Route path='/ranking' element={<Navbar/>}/>
          <Route path='/leaderboard' element={<Leaderboard/>}/>
          <Route path='/profile' element={<Navbar/>}/>
          <Route path='/settings' element={<Navbar/>}/>
          <Route path='/about' element={<Navbar/>}/>
        </Routes>
    </div>
  );
}

export default App;
