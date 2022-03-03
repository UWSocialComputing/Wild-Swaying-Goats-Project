import './App.css';
import BibliographyPage from "./BibliographyPage";
import AddSourcePage from "./AddSourcePage";
import AddBibliographyPage from "./AddBibliographyPage";
import LandingPage from "./LandingPage";
import React, { useReducer, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Grid, Toolbar, Button, AppBar, MuiThemeProvider } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';
import logo from './resources/logo.png';

const theme = createTheme({
  palette: {
      primary: {
          main: "#1976d2",
      },
      secondary: {
          main: "#ffffff"
      }
  }
});

function App() {
  function reducer(state, action) {
    switch(action.type) {
      case 'ADD_BIBLIOGRAPHY':
        if (!state.discussions.includes(action.newBib)) {
          state.discussions.push(action.newBib);
        }
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
      case 'VOTE':
        let newVote = action.voteScore;
        let sourceScores;
        let disc;
        state.discussions.forEach((discussion) => {
          disc = discussion.data;
          let side1 = disc.side1Sources;
          let side2 = disc.side2Sources;
          side1.forEach((source) => {
            if (source.title === action.title) {
              sourceScores = source.scores;
            }
          })
          side2.forEach((source) => {
            if (source.title === action.title) {
              sourceScores = source.scores;
            }
          })
        })
        sourceScores.push(newVote)
        return state;
      default:
        return state;
    }
  }

  const [store, dispatch] = useReducer(reducer, require('./data/sources.json'));

  const [count, setCount] = useState(0);

  let allRoutes = store.discussions.map(function(i) {
    return(
      <>
      <Route
        path={i.url}
        element={<BibliographyPage url={i.url} store={store} dispatch={dispatch}/>}/>
      <Route
        path={i.url + "/add-source"}
        element={<AddSourcePage url={i.url} side1={i.data.side1} side2={i.data.side2} store={store} dispatch={dispatch}/>}/>
      </>
    );
  });

  return (
    <Router>
      <MuiThemeProvider theme={ theme }>
        <AppBar id="appBar" position="absolute">
          <Toolbar>
            <Grid container  style={{ marginTop: "5px" }} justifyContent="space-between">
              <Grid item>
                <div style={{display:"flex", flexDirection:"row"}}>
                  <img src={logo} alt="Sussy Goat" width="40" height="40"/>
                  <div style={{display:"flex", alignItems:"flex-end"}}>
                    <h3 style={{marginLeft:"10px", marginRight:"10px", fontFamily:"monospace", fontSize:"25pt"}}>GOAT</h3>
                    <h6 style={{alignSelf:"center", fontFamily:"monospace"}}>(Greatest Online Anti-misinformation Tables)</h6>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <Button variant="contained" component={Link} to={"/add-bibliography"}>
                  Add New Bibliography
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<LandingPage store={store}/>}/>
          <Route path="/add-bibliography" element={<AddBibliographyPage store={store} dispatch={dispatch} url={"/"}/>}/>
          {allRoutes}
          <Route path="*" element={<Loading store={store} count={count} setCount={setCount}/>}/>
        </Routes>
      </MuiThemeProvider>
    </Router>
  );
}

function Loading(props) {
  props.setCount(props.state+1);
  return null;
}

export default App;
