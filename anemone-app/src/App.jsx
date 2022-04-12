import './App.css';
import AnemoneHomeView from './AnemoneHomeView';
import * as React from 'react';
import AboutView from './AboutView';
// import Search from './Search';
import Collect from './components/Collect';
import Retrieve from './Retrieve';
import * as PropTypes from "prop-types";
import { Button, BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import { Box } from '@mui/system';


AnemoneHomeView.propTypes = {src: PropTypes.string};

export default function App() {
    const [componentView, setComponentView] = React.useState('About');
    const setComponentViewContext = (context) => {
        console.log(context);
        setComponentView(context);
    };
    function view(value) {
        // eslint-disable-next-line default-case
        switch (value) {
            case 'Discover': return <h1>Discover Data</h1>
            // case 1: return <AnemoneHomeView/>
            case 'Collect': return <Collect/>
            case 'Retrieve': return <Retrieve/>
            // case 4: return <Search/>
            // case 5: return <NameComponent name={componentView} setComponentView={setComponentViewContext} />
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
