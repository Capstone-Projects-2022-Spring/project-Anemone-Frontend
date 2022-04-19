import * as React from 'react';
import '../App.css';
import Fab from '@mui/material/Fab';
import IssueCollector from './IssueCollector';


export default function AboutView() {
    return (
        <div className="About">
            <header className="App-header">
                <>
                    <h1>About Us</h1>
                    <h4>You bring thoughts;</h4> 
                    <h4>We'll bring thinking</h4>                      
                    <h5 alignment="center">Together, let's expand capacity.</h5>
                    <a
                        className="App-link"
                        href="https://anemone.avalonbloom.com/api/v1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        alignment="center"
                    >
                        Want to integrate? Check out our API
                    </a>
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