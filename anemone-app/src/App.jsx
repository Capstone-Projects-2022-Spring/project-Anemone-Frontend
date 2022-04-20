import './App.css';
import AnemoneHomeView from './components/AnemoneHomeView';
import * as React from 'react';
import AboutView from './components/AboutView';
import Collect from './components/Collect';
import Retrieve from './components/Retrieve';
import Register from './components/Register';
import * as PropTypes from "prop-types";
import { Button, BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import SearchBar from "./components/SearchBar";
import BookData from "./Data.json";
// import Verification from './components/Verification';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { Box } from '@mui/system';
import LoginPage from './components/LoginPage/LoginPage';
import Verification from './components/RegisterPage/Verification';

AnemoneHomeView.propTypes = { src: PropTypes.string };
Retrieve.propTypes = { src: PropTypes.string };
Collect.propTypes = { src: PropTypes.object };

function Search() {
    return (
        <SearchBar placeholder="Enter the key words: " data={BookData} />
    );
}
function Verify(){
    return (
        <Verification/>
    );
}

export default function App() {
    function test(name) {
        if (name === 'Search') {
            // setValue('Search')
        }
    }

    return (<>
        <Paper sx={{ position: 'fixed', bottom: 200,  right: 300 }} >
            <AnemoneHomeView token />
        </Paper>
        <div className="App">
            <div className="wrapper">
                    <Routes>
                        <Route path="/search" element={<Search token goView={test} />} />
                        {/*<Route path="/home" element={<AnemoneHomeView token />} />*/}
                        <Route exact path="/" element={<Search />} />
                        <Route exact path="/register" element={<Register token />} />
                        <Route exact path="/login" element={<LoginPage token />} />
                        <Route path="/collect" element={<Collect token />} />
                        {/*<Route path="/retrieve" element={<Retrieve token />} />*/}
                        <Route path="/about" element={<AboutView token />} />
                        <Route path="/verify" element={<Verification/>} />
                    </Routes>
            </div>
        </div>
        </>
    );
}