import './App.css';
import BibliographyPage from "./BibliographyPage";
import AddSourcePage from "./AddSourcePage";
import AddBibliographyPage from "./AddBibliographyPage";
import LandingPage from "./LandingPage";
import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grid, Toolbar, Button, AppBar, MuiThemeProvider } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
      primary: {
          main: "#1976d2",
      },
      secondary: {
          main: "#ffffff"
      }
  },
  typography: {
      fontSize: 12,
      fontFamily: "Montserrat"
  }
});

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
                <h3> Wild Swaying Online Bibliography </h3>
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
        </Routes>
      </MuiThemeProvider>
    </Router>
  )
}

export default App;
