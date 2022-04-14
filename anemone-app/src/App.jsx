import './App.css';
import AnemoneHomeView from './AnemoneHomeView';
import * as React from 'react';
import AboutView from './AboutView';
import Collect from './components/Collect';
import Retrieve from './Retrieve';
import * as PropTypes from "prop-types";
import {Button, BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import SearchBar from "./components/SearchBar";
import BookData from "./Data.json";
import { Box } from '@mui/system';


AnemoneHomeView.propTypes = {src: PropTypes.string};
Retrieve.propTypes = {src: PropTypes.string};


function Search() {
    return(
    <SearchBar placeholder="Enter the key words: " data={BookData} />
    );
}



export default function App() {
    const [value, setValue] = React.useState(1);
    const [componentView, setComponentView] = React.useState('About');
    const setComponentViewContext = (context) => {
        console.log(context);
        setComponentView(context);
    };


    function test(name){
        if(name === 'Search'){
            setValue('Search')
        }
    }

    function view(value) {
        // eslint-disable-next-line default-case
        switch (value) {
            case 'About': return <AnemoneHomeView/>
            case 'Search': return <Search goView={test}/>
            case 'Collect': return <Collect/>
            case 'Retrieve': return <Retrieve/>
            default: return <AboutView/>
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <>{<>{view(componentView)}</>}</>
            </header>
            <footer>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <Box sx={{ position: 'relative', bottom: 250, left: 1200, right: 0 }} elevation={3}>
                        <AnemoneHomeView setParentContext={setComponentViewContext}/>
                    </Box>
                    <BottomNavigation
                        showLabels
                        value={componentView}
                        onChange={(event, newValue) => {
                            setComponentViewContext(newValue);
                        }}
                    >
                        <BottomNavigationAction label="About" icon={<Button />} />
                    </BottomNavigation>
                </Paper>
            </footer>
        </div>
    )};
