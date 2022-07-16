import React from 'react';
import './App.css';
import {Header} from "./components/common";
import {Footer} from "./components/common";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
        <Header/>
        <Footer/>
    </Router>
  );
}

export default App;
