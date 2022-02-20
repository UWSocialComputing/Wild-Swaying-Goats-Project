import './App.css';
import BibliographyPage from "./BibliographyPage";
import AddSourcePage from "./AddSourcePage";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // OLD APP STUFF FROM INIT
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BibliographyPage />} />
        <Route path="/add-source" element={<AddSourcePage />} />
      </Routes>
    </Router>
  )
}

export default App;
