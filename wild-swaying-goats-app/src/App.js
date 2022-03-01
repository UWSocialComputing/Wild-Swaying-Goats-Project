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
        state.discussions.add(action);
        return state;
      case 'ADD_SOURCE':
        let sideString = "side" + action.side + "Sources";
        let discussionData;
        state.discussions.forEach((i) => {
          if (i.url === action.url) {
            discussionData = i.data; 
          }
        })
        let sideSources = discussionData[sideString];
        sideSources.push(action.source);
        return state;
      default:
        return state;
    }
  }

  const [store, dispatch] = useReducer(reducer, require('./data/sources.json'));

  let allRoutes = store.discussions.map(function(i) {
    return(
      <>
      <Route path={i.url} element={<BibliographyPage url={i.url} store={store} dispatch={dispatch}/>} />
      <Route path={i.url + "/add-source"} element={<AddSourcePage url={i.url} side1={i.data.side1} side2={i.data.side2} store={store} dispatch={dispatch}/>}/>
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
