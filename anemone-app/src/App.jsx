import './App.css';
import AnemoneHomeView from './AnemoneHomeView';
import * as React from 'react';
import AboutView from './AboutView';
// import Search from './Search';
import Collect from './components/Collect';
import Retrieve from './Retrieve';
import * as PropTypes from "prop-types";
import {Button, BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";


AnemoneHomeView.propTypes = {src: PropTypes.string};

export default function App() {
    const [value, setValue] = React.useState(1);
    const [componentView, setComponentView] = React.useState();
    const setComponentViewContext = (context) => {
        console.log(context);
        setComponentView(context);
    };
    function view(value) {
        // eslint-disable-next-line default-case
        switch (value) {
            case 0: return <h1>Discover Data</h1>
            case 1: return <AnemoneHomeView/>
            case 2: return <Collect/>
            case 3: return <Retrieve/>
            // case 4: return <Search/>
            // case 5: return <NameComponent name={componentView} setComponentView={setComponentViewContext} />
            default: return <AboutView/>
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <>
                    {
                        <>
                        {view(value)}
                    </>
                    }
                </>
            </header>
            <footer>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Market" icon={<Button />} />
                        <BottomNavigationAction label="Anemone" icon={<Button />} />
                        <BottomNavigationAction label="Collect" icon={<Button />} />
                        <BottomNavigationAction label="Retrieve" icon={<Button />} />
                        <BottomNavigationAction label="About" icon={<Button />} />
                    </BottomNavigation>
                </Paper>
            </footer>
        </div>
    )};
