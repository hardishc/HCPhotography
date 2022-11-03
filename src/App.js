import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Profile from './routes/Profile';
import Gallery from './routes/Gallery';
import Events from './routes/EventsPage';
import Landscape from './routes/LandscapePage';
import Portrait from './routes/PortraitPage';
import Film from './routes/FilmPage';
import Abstract from './routes/AbstractPage';
import HomePage from "./routes/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='' element={<HomePage title="Hardish Photography"/>}/>
          <Route path='/profile' element={<Profile title="Hardish Photography | Profile" />} />
          <Route path='/gallery' element={<Gallery title="Hardish Photography | Gallery" />} />
          <Route path='/events' element={<Events title="Hardish Photography | Events" />} />
          <Route path='/landscape' element={<Landscape title="Hardish Photography | Landscape" />} />
          <Route path='/portrait' element={<Portrait title="Hardish Photography | Portrait" />} />
          <Route path='/film' element={<Film title="Hardish Photography | Film" />} />
          <Route path='/abstract' element={<Abstract title="Hardish Photography | Abstract" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
