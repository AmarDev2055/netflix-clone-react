import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Player from './pages/Player';
import TvShows from './pages/TvShows';
import Netflex from './pages/Netflex';
import MoviePage from './pages/MoviePage';
// import BackgroundImage from './components/BackgroundImage';
// import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<LoginPage/>}></Route>
        <Route exact path='/signup' element={<SignUpPage/>}></Route>
        <Route exact path='/player' element={<Player/>}></Route>
        <Route exact path='/tv' element={<TvShows/>}></Route>
        <Route exact path='/' element={<Netflex/>}></Route>
        <Route exact path='/movie' element={<MoviePage/>}></Route>
      </Routes>
      {/* <BackgroundImage/> */}
    </BrowserRouter>
  );
}

export default App;
