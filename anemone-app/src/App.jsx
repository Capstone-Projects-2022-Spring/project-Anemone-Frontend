import './App.css';
import Home from './Home';
import * as React from 'react';
import rainbowBrain from './image/Anemone_03_b.png';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';


export default function App() {
  // const[getRainbowBrain, setRainbowBrain] = React.useState("./image/Anemone_03_b.png");
  const [value, setValue] = React.useState(1);
  const [getHome, setHome] = React.useState(false);


  return (
    <div className="App">
      <header className="App-header">
        <>
          {getHome ? <Home />: <><img src={rainbowBrain} className="" alt=""/>
            <p>
            Edit <code>src/App.jsx</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React for Project Anemone
            </a>
            </>
          }
      </>
      </header>
      <footer>
        <Home sx={{ position: 'absolute', bottom: 6, right: 6 }}></Home>
      </footer>
    </div>
  );
}