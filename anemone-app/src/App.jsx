import './App.css';
import AnemoneHomeView from './AnemoneHomeView';
import * as React from 'react';
import AboutView from './AboutView';
import Collect from './components/Collect';
import Retrieve from './Retrieve';
import SearchResult from './components/SearchResult';
import * as PropTypes from "prop-types";
import {Button, BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";

AnemoneHomeView.propTypes = {src: PropTypes.string};

export default function App() {
    const [value, setValue] = React.useState(1);
    const [componentView, setComponentView] = React.useState();
    const [getView,setView] = React.useState(9);
    const setComponentViewContext = (context) => {
        console.log(context);
        setComponentView(context);
    };
    function test(name){
        if(name === 'Save Search'){
            setValue(11);
        }
    }
    function view(value) {
        // eslint-disable-next-line default-case
        switch (value) {
            case 0: return <h1>Discover Data</h1>
            break; 
            case 1: return <AnemoneHomeView/>
            break;
            case 2: return <Collect/>
            break;
            case 3: return <Retrieve goView={test}/>
            break;
            case 11: return <SearchResult/>
            break;
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
                        <BottomNavigationAction label="Retrieve" icon={<Button />}/>
                        <BottomNavigationAction label="About" icon={<Button />} />
                        <BottomNavigationAction label="Search" icon={<Button />} />
                    </BottomNavigation>
                </Paper>
            </footer>
        </div>
    )};
