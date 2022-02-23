import "./App.css";
import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import {Link} from "react-router-dom";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';


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

  let sourceMetadata = props.sourceMetadata
  let date = props.date

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={5} style={{ marginTop: "15px" }}>
          <Grid item>
            <TextField
              required
              error={ sourceMetadata.title === "" }
              helperText="Required"
              id="title"
              label="Title"
              name="title"
              value={ sourceMetadata.title }
              placeholder={ "Insert Source Title" }
              onChange={ (event) => props.handleSourceMetadataChange(event) }
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
              value={ sourceMetadata.authors }
              placeholder={ "Insert Source Authors" }
              onChange={ (event) => props.handleSourceMetadataChange(event) }
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} style={{ marginTop: "15px" }}>
          <Grid item>
            <TextField
              required
              error={ sourceMetadata.sourcelink === "" }
              helperText="Required"
              id="sourceLink"
              label="SourceLink"
              name="sourceLink"
              value={ sourceMetadata.sourceLink }
              placeholder={ "Insert Source Link" }
              onChange={ (event) => props.handleSourceMetadataChange(event) }
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} style={{ marginTop: "15px" }}>
          <Grid item>
            <DatePicker
              disableFuture
              label="Responsive"
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
                <Button>
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
  const [sourceMetadata, setSourceMetadata] = useState({
    title: "",
    authors: "",
    sourceLink: "",
  })

  const handleSourceMetadataChange = (event) => {
    event.persist()
    setSourceMetadata(sourceMetadata => ({ ...sourceMetadata, [event.target.name]: event.target.value }))
    
    // Debugging
    console.log(event.target.name + ": " + event.target.value)
  }

  const handleDateChange = (event) => {
    setDate(event.value)
  }

  return (
    <div style={{ marginLeft: "100px" }}>
      <RenderSampleStringGroup />
      <RenderForm
        sourceMetadata={ sourceMetadata }
        handleSourceMetadataChange= { (event) => handleSourceMetadataChange(event) }
        date={ date }
        setDate={ setDate }
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