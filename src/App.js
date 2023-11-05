import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Holding from './components/Holding';

function App() {

  // Chose to show landing page or developed site
  const [developer, setDeveloper] = useState(true)

  return (
    <div className="App">
      {/* Returns either landing page or developed site */}
      {developer ? <Holding /> : <div><Header /></div>}
    </div>
  );
}

export default App;
