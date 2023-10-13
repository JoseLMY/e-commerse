import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NavBar } from './NavBar';
import { Home } from './Home';
import { Classic } from './Classic';
import { Folkloric } from './Folkloric';
import { Bussines } from './Bussines';
import { Sport } from './Sport';
import { Elegant } from './Elegant';
import { Formal } from './Formal';
import { LogIn } from './LogIn';
import {NotFound} from './NotFound'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/classic" element={<Classic />} />
          <Route  path="/folkloric" element={<Folkloric />} />
          <Route  path="/bussines" element={<Bussines />} />
          <Route  path="/sport" element={<Sport />} />
          <Route  path="/elegant" element={<Elegant />} />
          <Route  path="/formal" element={<Formal />} />
          <Route  path="/login" element={<LogIn />} />
          <Route  path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
