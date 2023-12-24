import ReactGA from 'react-ga4';
import { Portfolio } from './pages'
import './App.css'

const TRACKING_ID = import.meta.env.VITE_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

function App() {
  return <Portfolio />
}

export default App
