import './App.css';
import AnemoneHomeView from './AnemoneHomeView';
import * as React from 'react';
import AboutView from './AboutView';
import Collect from './components/Collect';
import Retrieve from './components/Retrieve';
import * as PropTypes from "prop-types";
import { Button, BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import SearchBar from "./components/SearchBar";
import BookData from "./Data.json";
import { Box } from '@mui/system';
import Register from "./components/Register";
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

export default function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/AnemoneHomeView" element={<AnemoneHomeView token />}></Route>
                </Routes>
            </div>
        </div>
    );
}