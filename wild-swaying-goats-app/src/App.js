import './App.css';
import BibliographyPage from "./BibliographyPage";
import AddSourcePage from "./AddSourcePage";
import LandingPage from "./LandingPage";
import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  function reducer(state, action) {
    switch(action.type) {
      case 'ADD_DISCUSSION':
        return { 
          state
        }
      case 'ADD_SOURCE':
        return { 
          state
        }
      default:
        return state
    }
  }

  const [store, dispatch] = useReducer(reducer, require('./data/sources.json'));

  let allRoutes = store.discussions.map(function(i) {
    return(
      <>
      <Route path={i.url} element={<BibliographyPage url={i.url} store={store} dispatch={dispatch}/>} />
      <Route path={i.url + "/add-source"} element={<AddSourcePage side1={i.data.side1} side2={i.data.side2}/>}/>
      </>
    );
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage store={store}/>}/>
        {allRoutes}
      </Routes>
    </Router>
  )
}

export default App;
