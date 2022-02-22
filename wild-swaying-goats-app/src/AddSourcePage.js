import "./App.css";
import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";

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

  return (
    <div>
      <Grid container style={{ marginTop: "15px" }}>
        <Grid item>
          <TextField
            required
            error={ props.title === "" }
            helperText="Required"
            id="title"
            label="Title"
            name="title"
            value={ props.title }
            placeholder={ "Insert Source Title" }
            onChange={ (event) => props.handleTitleChange }
            InputLabelProps={{ shrink: true }}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </div>
  )
}

// Parent Component
// This is where we should keep ALL
// of our variables
function AddSourceForm() {

  const [title, setTitle] = useState("")
  const [authors, setAuthors] = useState("")
  const [link, setLink] = useState("")
  const [date, setDate] = useState("2000-01-01")

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  return (
    <div style={{ marginLeft: "100px" }}>
      <RenderSampleStringGroup />
      <RenderForm title={ title } handleTitleChange={ (event) => handleTitleChange(event) }/>
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