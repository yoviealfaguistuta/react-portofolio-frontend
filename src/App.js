import './App.css';
import { Main } from './components/main';
import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    // window.teamSlider();
    return () => {
      // console.clear();
    }
  }, [])

  return (
    <div className="App">
      {/* <div className="pre-loader"><div></div></div> */}
          <Main/>
    </div>
  );
}

export default App;
