import React from 'react';
import './App.css';

import RoutesContainer from "../Routes/RoutesContainer";
import { NavbarContainer } from "../Navbar";

function App() 
{
    return (
        <div className="App">
            <NavbarContainer />
            <header className="App-header">
                <RoutesContainer />
            </header>
        </div>
    );
}

export default App;