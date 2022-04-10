import './App.css';
import Home from './Home';
import * as React from 'react';
import Fab from '@mui/material/Fab';
import IssueCollector from './IssueCollector';

<<<<<<< HEAD
export default function App() {
  // const[getRainbowBrain, setRainbowBrain] = React.useState("./image/Anemone_03_b.png");
  const [value, setValue] = React.useState(1);
  const [getHome, setHome] = React.useState(false);


  return (
    <div className="About">
      <header className="App-header">
      {/* <Home sx={{ position: 'relative', mt: 1, height: 10 }}></Home> */}
        <>
          {getHome ? <Home />: <><Home sx={{ position: 'relative', mt: 1, height: 10 }}></Home>
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
          <IssueCollector sx={{ position: 'fixed'}}/>
          We love feedback
        </Fab>
      </footer>
    </div>
  );
}
=======

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
    )};
>>>>>>> 67e734d98dded4e128015fe178dc0e2d8d1d2228
