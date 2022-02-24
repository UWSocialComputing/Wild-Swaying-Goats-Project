import "./App.css";
import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import {Link} from "react-router-dom";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import sources from "./data/sources.json";


// Child Component
function RenderShowTextButton(props) {

  // When clicked, do this
  // Don't really need event right now,
  // but will be important if we need to pass
  // information to button
  const handleClick = async (event) => {
    if (props.showText) {
      props.setShowText(false)
    } else {
      props.setShowText(true)
    }
  }

  return (
    <div>
      <Button onClick={ (event) => handleClick(event) }>
        {"Show Text Button"}
      </Button>
    </div>
  )
}


// Sample "Parent" Component
// Parent because it holds the actual
// variables (the one we set using useState),
// but not actual Parent because
// it is rendered in another component
function RenderSampleStringGroup() {
  // Convention to create variables and their setter
  // useState sets their initial value
  const [sampleString, setSampletring] = useState("Hello World!")
  const [showText, setShowText] = useState(false)

  // Conditional rendering
  // Might have cleaner ways, idk lol
  let components;
  if (showText) {
    components = (
      <Grid item>
        <RenderShowTextButton showText={ showText } setShowText={ setShowText } />
        <p>
          { sampleString }
        </p>
      </Grid>
    )
  } else {
    components = (
      <Grid item>
        <RenderShowTextButton showText={ showText } setShowText={ setShowText } />
      </Grid>
    )
  }

  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ marginTop: '15px' }}
      >
        { components }
      </Grid>
    </div>
  )
}

function RenderForm(props) {

  let source = props.source
  let date = props.date

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={5} style={{ marginTop: "15px" }}>
          <Grid item>
            <TextField
              required
              error={ sources.title === "" }
              helperText="Required"
              id="title"
              label="Title"
              name="title"
              value={ sources.title }
              placeholder={ "Insert Source Title" }
              onChange={ (event) => props.handleSourceChange(event) }
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} style={{ marginTop: "15px" }}>
          <Grid item>
            <TextField
              id="authors"
              label="Authors"
              name="authors"
              value={ source.authors }
              placeholder={ "Insert Source Authors" }
              onChange={ (event) => props.handleSourceChange(event) }
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} style={{ marginTop: "15px" }}>
          <Grid item>
            <TextField
              required
              error={ source.sourcelink === "" }
              helperText="Required"
              id="sourceLink"
              label="SourceLink"
              name="sourceLink"
              value={ source.sourceLink }
              placeholder={ "Insert Source Link" }
              onChange={ (event) => props.handleSourceChange(event) }
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} style={{ marginTop: "15px" }}>
          <Grid item>
            <DatePicker
              disableFuture
              label="Date"
              openTo="year"
              views={['year', 'month', 'day']}
              value={ date }
              onChange={(newDate) => {
                props.setDate(newDate)
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        </Grid>

        <Grid container spacing={5} style={{ marginTop: "15px" }}>
          <Grid item>
            <Link to="/">
                <Button>
                    Cancel
                </Button>
                <Button onClick={ (event) => props.handleSave(event) }>
                    Save
                </Button>
            </Link>
          </Grid>
        </Grid>        
      </LocalizationProvider>
    </div>
  )
}

// Parent Component
// This is where we should keep ALL
// of our variables
function AddSourceForm() {

  const [date, setDate] = useState(new Date())
  const [source, setSource] = useState({
    title: "",
    authors: "",
    sourceLink: "",
  })

  const handleSave = (event) => {
    const newSource = {
      title: source.title,
      authors: source.authors,
      sourceLink: source.sourceLink,
      date: date
    }

    const newSources = [...sources, newSource]

    const fileData = JSON.stringify(newSources);
    const blob = new Blob([fileData], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'sources.json';
    link.href = url;
    link.click();
  }
  
  const handleSourceChange = (event) => {
    event.persist()
    setSource(source => ({ ...source, [event.target.name]: event.target.value }))
    
    // Debugging
    console.log(event.target.name + ": " + event.target.value)
  }

  return (
    <div style={{ marginLeft: "100px" }}>
      <RenderSampleStringGroup />
      <RenderForm
        source={ source }
        handleSourceChange= { (event) => handleSourceChange(event) }
        date={ date }
        setDate={ setDate }
        handleSave={ (event) => handleSave(event) }
      />
    </div>
  )
}

// This is the export function
// When App.js want to render the Add Source page, 
// it will import this function and "render" it
// We render the parent component here
export default function AddSourcePage() {

  return (
    <div className="App">
      <AddSourceForm/>
    </div>
  );
}