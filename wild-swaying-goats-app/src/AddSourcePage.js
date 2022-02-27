import "./App.css";
import React, { useState } from "react";
import { Button, Grid, TextField, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import {Link} from "react-router-dom";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import sources from "./data/sources.json";

function RenderForm(props) {

  let source = props.source
  let date = props.date

  return (
    <div style={{ marginLeft: "100px", marginTop: "100px" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={5} style={{ marginTop: "15px" }}>
          <Grid item>
            <TextField
              style={{ width: 500 }}
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
            <FormControl fullWidth>
              <InputLabel id="selectSourceTypeLabel" variant="outlined">Source Type</InputLabel>
              <Select
                labelId="selectSourceTypeLabel"
                style={{ width: 500 }}
                id="sourceType"
                name="sourceType"
                value={ source.sourceType }
                label="Source Type"
                onChange={ (event) => props.handleSourceChange(event) }
                variant="outlined"
              >
                <MenuItem value={"Book"}>Book</MenuItem>
                <MenuItem value={"Journal"}>Journal</MenuItem>
                <MenuItem value={"Magazine"}>Magazine</MenuItem>
                <MenuItem value={"Newspaper"}>Newspaper</MenuItem>
                <MenuItem value={"Online Article"}>Online Article</MenuItem>
                <MenuItem value={"Wikipedia"}>Wikipedia</MenuItem>
                <MenuItem value={"Blog"}>Blog</MenuItem>
                <MenuItem value={"Podcast"}>Podcast</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={5} style={{ marginTop: "15px" }}>
          <Grid item>
            <TextField
              style={{ width: 500 }}
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
              style={{ width: 500 }}
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
            <FormControl>
              <InputLabel id="sideLabel" variant="outlined">Source Side</InputLabel>
              <Select
                style={{ width: 500 }}
                id="side"
                name="side"
                value={ source.side }
                label="Source Type"
                onChange={ (event) => props.handleSourceChange(event) }
                variant="outlined"
              >
                <MenuItem value={0}>Side 1: Something something</MenuItem>
                <MenuItem value={1}>Side 2: Something that isn't something</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={5} style={{ marginTop: "15px" }}>
          <Grid item>
            <TextField
              style={{ width: 500 }}
              multiline={ true }
              rows={ 9 }
              id="quote"
              label="Quote"
              name="quote"
              value={ source.quote }
              placeholder={ "Insert Quote (max. 450 characters)" }
              onChange={ (event) => props.handleSourceChange(event) }
              inputProps={{ maxLength: 450 }}
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid container spacing={5} style={{ marginTop: "15px", alignItems: "center", justify: "center" }}>
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
    sourceType: "",
    authors: "",
    sourceLink: "",
    quote: "",
    side: undefined
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