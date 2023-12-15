import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactGA from 'react-ga';
import './App.css'
import { Portfolio } from './pages'

const TRACKING_ID = import.meta.env.VITE_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
