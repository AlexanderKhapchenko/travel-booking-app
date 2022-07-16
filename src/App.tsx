import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/common";
import * as Image from "./assets";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
        <Header/>
    </Router>
  );
}

export default App;
