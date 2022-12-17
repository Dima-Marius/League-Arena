import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import './reset.css'
import Home from './routes/Home/Home';
import Leaderboard from './routes/Leaderboard/Leaderboard';
import Login from './routes/Login/Login';
import NotFound from './routes/NotFound/NotFound';
import About from '../src/routes/About/About'
import Teams from './routes/Teams/Teams';
import { AuthContextProvider } from './context/AuthContext';
import PrivateRoutes from './routes/PrivateRoutes/PrivateRoutes';
import UserProfileRoutes from './routes/UserProfile/UserProfileRoutes.jsx';
import Redirect from './routes/Redirect/Redirect';
import { ApiKeyContextProvider } from './context/ApiKeyContext';
import Settings from './routes/Settings/Settings';
import TeamProfileRoutes from './routes/TeamProfile/TeamProfile';
import TeamProfileRedirect from './routes/TeamProfile/TeamProfileRedirect';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ApiKeyContextProvider>
        <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signin' element={<Login/>} />
        <Route path='/register' element={<Login/>} />
          <Route element={<PrivateRoutes/>}>
            <Route path='/Home' element={<Home/>} />
            <Route path='/search' element={<Teams/>} />
            <Route path='/leaderboard' element={<Leaderboard/>} />
            <Route path='/userProfile'>
              <Route index element={<Redirect/>}/>
              <Route path='*' element={<UserProfileRoutes/>}/>
            </Route>
            <Route path='/teamProfile'>
              <Route index element={<TeamProfileRedirect/>}/>
              <Route path='*' element={<TeamProfileRoutes/>}/>
            </Route>
            <Route path='/settings' element={<Settings/>} />
            <Route path='/about' element={<About/>} />
            <Route path='*' element={<NotFound/>} />
          </Route>
        </Routes>
        </ApiKeyContextProvider>
        </AuthContextProvider>
    </div>
  );
}

export default App;
