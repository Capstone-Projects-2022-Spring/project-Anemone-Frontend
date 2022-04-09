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
}