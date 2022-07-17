import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Routing} from "./components/containers";
import {useLocalStorage} from "./components/hooks/useLocaleStorage";

function App() {
  return (
    <Router>
        {/*<Routing isAuthorized={Boolean(username)} setUsername={setUsername} removeUsername={removeUsername}/>*/}
        <Routing/>
    </Router>
  );
}

export default App;
