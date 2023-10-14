import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ShoppingCartProvider } from './Context';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Classic } from './pages/Classic';
import { Folkloric } from './pages/Folkloric';
import { Bussines } from './pages/Bussines';
import { Sport } from './pages/Sport';
import { Elegant } from './pages/Elegant';
import { Formal } from './pages/Formal';
import { LogIn } from './pages/LogIn';
import {NotFound} from './pages/NotFound'

function App() {
  
  return (
    <ShoppingCartProvider >
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
    </ShoppingCartProvider>
  );
}

export default App;
