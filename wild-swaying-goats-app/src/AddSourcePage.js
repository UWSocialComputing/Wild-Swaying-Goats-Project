import "./App.css";
import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";

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

// Parent Component
// This is where we should keep ALL
// of our variables
function AddSourceForm() {

  return (
    <div>
      <RenderSampleStringGroup />
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