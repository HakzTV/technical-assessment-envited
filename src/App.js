import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreateEvent from './pages/CreateEvent';
import EventDisplay from './pages/EventDisplay';
const App = () => {
  return (
   
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element = {<LandingPage />}/>
        <Route path="/create" element = {<CreateEvent />}/>
        <Route path="/event" element = {<EventDisplay />}/>
      </Routes>
    </BrowserRouter>

      
    </div>
  );
}

export default App;
