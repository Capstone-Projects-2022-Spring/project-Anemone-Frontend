<<<<<<< HEAD
import './App.css';
import Home from './Home';
import * as React from 'react';
import Fab from '@mui/material/Fab';
import IssueCollector from './IssueCollector';


export default function App() {
    // const[getRainbowBrain, setRainbowBrain] = React.useState("./image/Anemone_03_b.png");
    const [value, setValue] = React.useState(1);
    const [getHome, setHome] = React.useState(false);


    return (
        <div className="About">
            <header className="App-header">
                {/* <Home sx={{ position: 'relative', mt: 1, height: 10 }}></Home> */}
                <>
                    {getHome ? <Home /> : <><Home sx={{ position: 'relative', mt: 1, height: 10 }}></Home>
                        <h2>About Us</h2>
                        <p>You bring thoughts; we'll bring thinking</p>
                        <p>Together, let's expand capacity.</p>
                        <a
                            className="App-link"
                            href="https://anemone.avalonbloom.com/api/v1/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Want to integrate? Check out our API
                        </a>
                        <p></p>
                    </>
                    }
                </>
            </header>
            <footer>
                <Fab variant="extended" size="small" color="primary" aria-label="add">
                    <IssueCollector sx={{ position: 'fixed' }} />
                    We love feedback
                </Fab>
            </footer>
        </div>
    );
=======
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React for Project Anemone
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import './App.css';
import feature from './components/collectFeature';
import * as React from 'react';
import Fab from '@mui/material/Fab';


export default function App() {
  const [value, setValue] = React.useState(1);
  const [getFeature, setFeature] = React.useState(false);


  return (
    <div className="About">
      <header className="App-header">
        <>
          {getFeature ? <feature /> : <><feature sx={{ position: 'relative', mt: 1, height: 10 }}></feature>
            {/* <h2>About Us</h2>
            <p>Testing feature</p>
            <p>Together, let's expand capacity.</p> */}
            {/* <a
              className="App-link"
              href="https://anemone.avalonbloom.com/api/v1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Want to integrate? Check out our API
            </a> */}
            <p></p>
          </>
          }
        </>
      </header>
    </div>
  );
>>>>>>> 7984b4e4edf1cca3c61f2a2f90e6f6aee65cb0d9
}