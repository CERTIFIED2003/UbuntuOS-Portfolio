import ReactGA from 'react-ga4';
import { Portfolio } from './pages'
import './App.css'

ReactGA.initialize(import.meta.env.VITE_TRACKING_ID);

export default function App() {
  return <Portfolio />
}