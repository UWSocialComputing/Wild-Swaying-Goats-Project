import React, { useState, useEffect } from "react";
import { Button, Slider, Grid } from "@mui/material/";

function RenderVoteButton(props) {

  const onClick = (event) => {
    event.preventDefault()
    props.dispatch({
      type: "VOTE",
      title: props.title,
      voteScore: props.voteScore
    })
  }
  
  return (
    <Button variant="contained" onClick={onClick}>
      Vote
    </Button>
  )
}

export default function SliderScore(props) {

  const [voteScore, setVoteScore] = useState(3)

  const handleChange = (event, value) => {
    setVoteScore(value);
    console.log(voteScore)
  }


  function getAverage() {
    let total = 0
    for (const score of props.scores) {
      total += score
    }
    return Math.round((total / props.scores.length) * 100) / 100
  }

  const avg = [
    {
      value: getAverage(),
      label: getAverage()
    }
  ]

  const [oldAvg, setoldAvg] = useState(avg)
  useEffect(() => {
    if (avg != oldAvg) {
      setoldAvg(avg)
    }
  }, [avg])

  return (
    <Grid container>
      <Grid item xs={6}>
        <Slider
          aria-label="Quality"
          defaultValue={voteScore}
          value={voteScore}
          valueLabelDisplay="auto"
          step={0.5}
          marks={avg}
          min={1}
          max={5}
          onChange={ (event, value) => handleChange(event, value) }
        />
      </Grid>
      <Grid item xs={4} style={{ marginLeft: "25px" }}>
        <RenderVoteButton title={ props.title } dispatch={ props.dispatch } voteScore={ voteScore }/>
      </Grid>
    </Grid>
  );
}