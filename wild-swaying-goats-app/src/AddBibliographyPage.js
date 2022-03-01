import "./App.css";
import React, { useState } from "react";
import { Button, Grid, TextField, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function RenderAddBibliographyForm(props) {

  let bibliography = props.bibliography

  return (
    <div style={{ marginLeft: "100px", marginTop: "100px" }}>
        <Grid container spacing={5} style={{ marginTop: "15px" }}>
            <Grid item>
            <TextField
                style={{ width: 500 }}
                required
                error={ bibliography.title === "" }
                helperText="Required"
                id="title"
                label="Bibliography Title"
                name="title"
                value={ bibliography.title }
                placeholder={ "Insert Source Title" }
                onChange={ (event) => props.handleBibliographyChange(event) }
                InputLabelProps={{ shrink: true }}
                variant="outlined"
            />
            </Grid>
        </Grid>
        <Grid container spacing={5} style={{ marginTop: "15px" }}>
            <Grid item>
            <TextField
                style={{ width: 500 }}
                required
                error={ bibliography.title === "" }
                helperText="Required"
                id="side1"
                label="Side 1 Title"
                name="side1"
                value={ bibliography.side1 }
                placeholder={ "Insert Side 1 Title" }
                onChange={ (event) => props.handleBibliographyChange(event) }
                InputLabelProps={{ shrink: true }}
                variant="outlined"
            />
            </Grid>
        </Grid>
        <Grid container spacing={5} style={{ marginTop: "15px" }}>
            <Grid item>
            <TextField
                style={{ width: 500 }}
                required
                error={ bibliography.title === "" }
                helperText="Required"
                id="side2"
                label="Side 2 Title"
                name="side2"
                value={ bibliography.side2 }
                placeholder={ "Insert Side 2 Title" }
                onChange={ (event) => props.handleBibliographyChange(event) }
                InputLabelProps={{ shrink: true }}
                variant="outlined"
            />
            </Grid>
        </Grid>
        <Grid container spacing={5} style={{ marginTop: "15px", alignItems: "center", justify: "center" }}>
            <Grid item>
                <Link to={"/"}>
                <Button>
                    Cancel
                </Button>
                </Link>
                <Button onClick={ (event) => props.handleSave(event) }>
                    Save
                </Button>
            </Grid>
        </Grid>
    </div>
  )
}

// Parent Component
// This is where we should keep ALL
// of our variables
function AddBibliographyForm(props) {
  let navigate = useNavigate();

  const [bibliography, setBibliography] = useState({
    title: "",
    side1: "",
    side2: ""
  })

  const handleSave = (event) => {
    const titleToUrl = (title) => {
        var url = "/" + title.toLowerCase().split(" ").join("-")

        return url
    }

    const newBibliograpghy = {
        title: bibliography.title,
        side1: bibliography.side1,
        side2: bibliography.side2,
        url: titleToUrl(bibliography.title)
    }

    console.log(newBibliograpghy)
  }
  
  const handleBibliographyChange = (event) => {
    event.persist()
    setBibliography(bibliography => ({ ...bibliography, [event.target.name]: event.target.value }))
  }

  return (
    <div style={{ marginLeft: "100px" }}>
      <RenderAddBibliographyForm
        bibliography={ bibliography }
        handleBibliographyChange= { (event) => handleBibliographyChange(event) }
        handleSave={ (event) => handleSave(event) }
      />
    </div>
  )
}

// This is the export function
// When App.js want to render the Add Source page, 
// it will import this function and "render" it
// We render the parent component here
export default function AddBibliographyPage(props) {

  return (
    <div className="App">
      <AddBibliographyForm url={props.url} side1={props.side1} side2={props.side2} store={props.store} dispatch={props.dispatch}/>
    </div>
  );
}